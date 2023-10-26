import { useContext } from "react";
import logoImg from "../assets/logo.jpg";
import Button from "./ui/Button";
import CartContext from "../Store/CartContext";
import UserProgressContext from "../Store/UserProgressContext";
const Header = () => {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return (totalNumberOfItems += item.quantity);
  }, 0);
  const handleShowCart = () => {
    userProgressCtx.showCart();
  };
  return (
    <>
      <header id="main-header">
        <div id="title">
          <img src={logoImg} alt="A Restaurant" />
          <h1>React Food</h1>
        </div>
        <nav>
          <Button textOnly onClick={handleShowCart}>
            Cart ({totalCartItems})
          </Button>
        </nav>
      </header>
    </>
  );
};

export default Header;
