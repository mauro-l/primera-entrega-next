import ProductsList from "@/components/Sections/Products/ProductsList";
import { db } from "@/config/config.js";
//import mockData from "@/data/mockData";
import { collection, getDocs } from "firebase/firestore";

const getProducts = async () => {
  try {
    const productRef = collection(db, "products");
    const querySnapshots = await getDocs(productRef);

    const docs = querySnapshots.docs.map((doc) => doc.data());
    return docs;
  } catch (err) {
    console.error("error al obtener los productos: ", err);
  }
};

export default async function Productos() {
  const products = await getProducts();
  return (
    <div>
      <h1 className="m-2 text-2xl font-semibold text-center">Productos:</h1>

      <ProductsList data={products} />
    </div>
  );
}
