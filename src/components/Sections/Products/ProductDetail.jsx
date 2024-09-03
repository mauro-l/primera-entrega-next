/* "use client";

import { useCartContext } from "@/context/CartContext.js";

const formatearPrecio = (precio) => {
  return new Intl.NumberFormat("es-ES", {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(precio);
};

function ProductDetail({ product }) {
  
  return (
    <div className="flex flex-col items-start justify-center gap-3 p-4 text-xl text-gray-700 h-72">
      <h1>
        <strong>{product.name}</strong>
      </h1>
      <p>
        <strong>Categoria:</strong> {product.category}
      </p>

      <p>
        <strong>Stock:</strong> {product.stock}
      </p>
      <p>
        <strong>Precio:</strong> $
        {product.price ? formatearPrecio(product.price) : ""}
      </p>
      
    </div>
  );
}

export default ProductDetail;
 */
