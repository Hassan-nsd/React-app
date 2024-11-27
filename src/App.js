import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Updated imports for v6
import MenuItems from "./MenuItems";
import Cart from "./Cart";
import Home from "./Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import About from "./About";

const CartNotification = ({ show }) => {
  return (
    show && (
      <div className="notification" style={notificationStyle}>
        Item Added to Cart!
      </div>
    )
  );
};

const notificationStyle = {
  backgroundColor: "orange",
  color: "white",
  padding: "10px",
  borderRadius: "5px",
  position: "fixed",
  top: "10px",
  right: "10px",
  zIndex: 1000,
  animation: "fadeInOut 3s forwards",
  marginTop: "45px",
};

const App = () => {
  const [cart, setCart] = useState([]);
  const [notificationVisible, setNotificationVisible] = useState(false);

  const addItemToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
    setNotificationVisible(true);

    setTimeout(() => {
      setNotificationVisible(false);
    }, 3000);
  };

  const removeItemFromCart = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };

  const incrementQuantity = (itemId) => {
    setCart(
      cart.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (itemId) => {
    setCart(
      cart.map((item) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/menu"
            element={
              <MenuItems
                addItemToCart={addItemToCart}
                CartNotification={CartNotification}
                notificationVisible={notificationVisible}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                removeItemFromCart={removeItemFromCart}
                incrementQuantity={incrementQuantity}
                decrementQuantity={decrementQuantity}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
