import { useCallback, useEffect, useState } from "react";

const sendHttpRequest = async ({ url, config }) => {
  const response = await fetch(url, config);

  const resData = await response.json();

  if (response.ok) {
    throw new Error(
      resData.data || "Something went wrong, failed to send request."
    );
  }

  return resData;
};

const useHttp = ({ url, config, initialData }) => {
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const sendRequest = useCallback(
    function sendRequest() {
      setIsLoading(true);
      try {
        const resData = sendHttpRequest({ url, config });
        setData(resData);
      } catch (err) {
        setError(err.message || "Something went wrong!");
      }
      setIsLoading(false);
    },
    [url, config]
  );

  useEffect(() => {
    if ((config && (config.method === "GET" || !config.method)) || !config) {
      sendRequest();
    }
  }, [sendRequest, config]);

  return {
    data,
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
