import { Fragment } from "react";
import mealsImg from "../../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Meals</h1>
        <button>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="Table of meals"></img>
      </div>
    </Fragment>
  );
};

export default Header;
