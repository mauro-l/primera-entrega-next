import Card from "@/components/Atoms/Card.jsx";

function ProductsList({ data }) {
  return (
    <div className="flex flex-wrap items-center justify-center">
      {data.map((prod, index) => (
        <Card
          key={index}
          id={prod.id}
          title={prod.name}
          img={prod.image}
          description={prod.description}
          category={prod.category}
          price={prod.price}
        />
      ))}
    </div>
  );
}

export default ProductsList;
