"use client";
import { useCartContext } from "@/context/CartContext.js";

function AddToCartBtn({ product }) {
  const { addToCart } = useCartContext();

  const handleBtn = (product) => {
    addToCart(product);
  };

  return (
    <button className="btn btn-neutral" onClick={() => handleBtn(product)}>
      Agregar al carrito
    </button>
  );
}

export default AddToCartBtn;
