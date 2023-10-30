import Cart from "./components/Cart/Cart";
import Checkout from "./components/Cart/Checkout";
import Header from "./components/Header";
import Meals from "./components/Meal/Meals";
import { CartContextProvider } from "./store/CartContext";
import { UserProgressContextProvider } from "./store/UserProgressContext";

function App() {
  return (
    <>
      <UserProgressContextProvider>
        <CartContextProvider>
          <Header />
          <Meals />
          <Cart />
          <Checkout />
        </CartContextProvider>
      </UserProgressContextProvider>
    </>
  );
}

export default App;
