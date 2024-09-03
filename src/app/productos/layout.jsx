import Filters from "@/components/Sections/Products/Filters.jsx";

function layout({ children }) {
  return (
    <div className="flex">
      <Filters />
      {children}
    </div>
  );
}

export default layout;
