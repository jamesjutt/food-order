const CartItem = () => {
  return (
    <li className="cart-item">
      <p>NAME - QTY x PRICE</p>
      <p>
        <button>-</button>
        <span>QTY</span>
        <button>+</button>
      </p>
    </li>
  );
};

export default CartItem;
