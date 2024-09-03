import { db } from "@/config/config.js";
import { collection, getDocs } from "firebase/firestore";
import Link from "next/link.js";

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

const getUniqueCategories = (data) => {
  const categories = data.map((item) => item.category);
  // eslint-disable-next-line no-undef
  return [...new Set(categories)];
};

export default async function Filters() {
  const products = await getProducts();
  const categories = getUniqueCategories(products);
  return (
    <div>
      <ul className="w-56 menu bg-base-200 rounded-box">
        <li>
          <h2 className="menu-title">Categorias</h2>
          <ul>
            {categories.map((category, index) => (
              <li key={index}>
                <Link href={`/productos/${category.toLowerCase()}`}>
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
