import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Header from "./components/Header";

const cartItems = [
  {
    type: "burger",
    name: "Cheese Burger",
    price: 6,
    id: 1,
    quantity: 1,
  },
  {
    type: "burger",
    name: " Hamburger",
    price: 5,
    id: 2,
    quantity: 1,
  },
];

const Cart = ({
  cart,
  removeItemFromCart,
  incrementQuantity,
  decrementQuantity,
}) => {
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <>
      <Header />
      <div className="container my-5">
        <h2 className="mb-4">Your Cart</h2>

        {cart.length > 0 ? (
          <div>
            <ul className="list-group mb-4">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <div>
                    {item.name} - ${item.price.toFixed(2)} x {item.quantity}
                  </div>
                  <div>
                    <button
                      className="btn btn-warning btn-sm mx-1"
                      disabled={item.quantity === 1}
                      onClick={() => decrementQuantity(item.id)}
                    >
                      -
                    </button>
                    <button
                      className="btn btn-primary btn-sm mx-1"
                      onClick={() => incrementQuantity(item.id)}
                    >
                      +
                    </button>
                    <button
                      className="btn btn-danger btn-sm mx-1"
                      onClick={() => removeItemFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="d-flex justify-content-between">
              <strong>Total: ${calculateTotal()}</strong>
              <button className="btn btn-success">Checkout</button>
            </div>
          </div>
        ) : (
          <p className="text-muted">Your cart is empty. Start adding items!</p>
        )}
      </div>
    </>
  );
};

export default Cart;
