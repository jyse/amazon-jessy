import React from "react";
import "./CartTotal.css";

function CartTotal({ items }) {
  const getTotalPrice = () => {
    let totalPrice = 0;

    items.map((item) => {
      totalPrice += item.price * item.quantity;
    });
    return totalPrice;
  };

  const getTotalItems = () => {
    let totalItems = 0;

    items.map((item) => {
      totalItems += item.quantity;
    });
    return totalItems;
  };

  return (
    <div className="CartTotal">
      <h3>
        Subtotal ({getTotalItems()} items)
        <span className="CartTotal-price">${getTotalPrice()}</span>
      </h3>
      <button>Proceed to checkout</button>
    </div>
  );
}

export default CartTotal;
