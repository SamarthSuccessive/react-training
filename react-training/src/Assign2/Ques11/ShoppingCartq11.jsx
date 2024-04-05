import React, { useContext } from "react";
import { Mycontext } from "./Createcontextq11";

function ShoppingCartq11() {
  let { cart, setCart } = useContext(Mycontext);

  const removeItem = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };
  console.log(cart);
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  return (
    <>
      <div>Shopping List is</div>
      {cart.map((item, index) => (
        <div key={index}>
          {console.log("item is...",item)}
          <p>{item.name} </p>
          <button onClick={() => removeItem(index)}>Remove</button>
        </div>
      ))}
      <p>Total: ${totalPrice}</p>
    </>
  );
}

export default ShoppingCartq11;
