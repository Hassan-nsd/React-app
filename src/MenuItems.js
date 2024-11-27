import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import MenuTabs from "./components/NavTabs";
import Header from "./components/Header";
import axios from "axios";

const menuItems = [
  {
    type: "burger",
    name: "Cheese Burger",
    price: 6,
    id: 1,
  },
  {
    type: "burger",
    name: "Hamburger",
    price: 5,
    id: 2,
  },
  {
    type: "burger",
    name: "Double Cheese Burger",
    price: 7,
    id: 3,
  },
  {
    name: "Chicken Burger",
    type: "burger",
    price: 4,
    id: 4,
  },
  {
    name: "Twister",
    type: "wrap",
    price: 3,
    id: 5,
  },
  {
    name: "Fajita",
    type: "wrap",
    price: 6,
    id: 6,
  },
  {
    name: "Chicken Shawarma",
    type: "wrap",
    price: 4,
    id: 7,
  },
  {
    name: "Beef Shawarma",
    type: "wrap",
    price: 5,
    id: 8,
  },
];

const MenuItems = ({
  addItemToCart,
  CartNotification,
  notificationVisible,
}) => {
  return (
    <>
      <div>
        <Header />
        <h3 id="menuTitle">Cheesy Menu</h3>
        <MenuTabs
          menuItems={menuItems}
          addItemToCart={addItemToCart}
          CartNotification={CartNotification}
          notificationVisible={notificationVisible}
        />
      </div>
    </>
  );
};

export default MenuItems;
