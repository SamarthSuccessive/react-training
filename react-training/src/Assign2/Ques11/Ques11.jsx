// 11.Build a shopping cart application using the useContext hook.
// Set up a context to manage the state of the shopping cart.
// Create components to display products and a shopping cart.
// Use the useContext hook to access the cart state and update it.
// Allow users to add and remove items from the cart.
// Display the total price of items in the cart.

import React, { useState } from "react";
import { Mycontext } from "./Createcontextq11";
import Productsq11 from "./Productsq11";
import ShoppingCartq11 from "./ShoppingCartq11";

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);
  const products = [
    { id: 1, name: "Iphone", price: 60000 },
    { id: 2, name: "Samsung", price: 40000 },
    { id: 3, name: "Nokia", price: 20000 },
  ];
  return (
    <>
      <div>
        <h1>The Products are </h1>
        <Mycontext.Provider value={{ cart, setCart }}>
          <Productsq11 product={products} />
          <br />
          <ShoppingCartq11 />
        </Mycontext.Provider>
      </div>
    </>
  );
};

export default ShoppingCart;
