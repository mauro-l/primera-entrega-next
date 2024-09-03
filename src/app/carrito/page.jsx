"use client";
import { useCartContext } from "@/context/CartContext.js";
import React from "react";

function Carrito() {
  const { cart } = useCartContext();
  console.log(cart);
  return (
    <>
      <h1>Carrito</h1>
      {cart.map((item) => (
        <h2 key={item.id}>
          {item.name} - {item.price}
        </h2>
      ))}
    </>
  );
}

export default Carrito;
