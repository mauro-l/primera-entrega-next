import ProductsList from "@/components/Sections/Products/ProductsList.jsx";
//import mockData from "@/data/mockData.js";
import { db } from "@/config/config.js";
import { collection, getDocs, query, where } from "firebase/firestore";

const getProductsByCategory = async (category) => {
  try {
    const productRef = collection(db, "products");
    const q = query(productRef, where("category", "==", category));
    const querySnapshots = await getDocs(q);

    const docs = querySnapshots.docs.map((doc) => doc.data());
    return docs;
  } catch (err) {
    console.error("error al obtener los productos: ", err);
  }
};
async function Category({ params }) {
  const decodedCategory = decodeURIComponent(params.category);
  const normalizedCategory =
    decodedCategory.charAt(0).toUpperCase() +
    decodedCategory.slice(1).toLowerCase();

  const products = await getProductsByCategory(normalizedCategory);

  return (
    <div>
      <h1>Productos: {decodedCategory}</h1>
      <ProductsList data={products} />
    </div>
  );
}

export default Category;
