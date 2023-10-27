/* eslint-disable no-unused-vars */
import useHttp from "../hooks/useHttp";
import MealItem from "./MealItem";

const requestConfig = {};

const Meals = () => {
  const { data, isLoading, error } = useHttp({
    url: "http://localhost:3000/meals",
    config: requestConfig,
    initialData: [],
  });
  if (isLoading) {
    return <p>Fetching meals...</p>;
  }
  return (
    <ul id="meals">
      {data.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
};

export default Meals;
