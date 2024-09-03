import AddToCartBtn from "@/components/Atoms/AddToCartBtn.jsx";
import { db } from "@/config/config.js";
import { collection, getDocs, query, where } from "firebase/firestore";
import Image from "next/image.js";

const getProductsById = async (id) => {
  try {
    const productRef = collection(db, "products");
    const q = query(productRef, where("id", "==", id));
    const docSnapshots = await getDocs(q);

    const docs = docSnapshots.docs[0].data();
    return docs;
  } catch (err) {
    console.error("error al obtener los productos: ", err);
  }
};

const formatearPrecio = (precio) => {
  return new Intl.NumberFormat("es-ES", {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(precio);
};

async function DetailProductById({ params }) {
  const product = await getProductsById(params.id);

  return (
    <article className="flex flex-col items-center justify-center gap-4 py-8 bg-white">
      <div className="flex flex-wrap items-center justify-center">
        <div className="bg-white">
          <Image
            src={product.image}
            alt={product.name}
            height={288}
            width={288}
            className="bg-white"
          />
        </div>
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
          <AddToCartBtn product={product} />
        </div>
      </div>
      <div className="container text-lg text-gray-700 px-7">
        <p>
          <strong>Descripcion:</strong> {product.description}
        </p>
      </div>
    </article>
  );
}

export default DetailProductById;
