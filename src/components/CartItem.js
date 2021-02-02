import React from "react";
import "./CartItem.css";

function CartItem() {
  return (
    <div className="CartItem">
      <div className="CartItem-image">
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/81SGb5l%2BlZL._AC_SX679_.jpg"
          alt="iPad Pro"
        />
      </div>
      <div className="CartItem-info">
        <div className="info-title">
          <h2> Apple iPad Pro</h2>
        </div>
        <div className="info-stock"> In Stock</div>
        <div className="item-actions">
          <div className="item-quantity">Quantity</div>
          <div className="item-actions-divider">|</div>
          <div className="item-delete">Delete</div>
        </div>
      </div>
      <div className="CartItem-price">$769.00</div>
    </div>
  );
}

export default CartItem;
