import ProductCard from "../../common/productCard/ProductCard";
import "./ItemListContainer.css";

const ItemList = ({ items }) => {
  return (
    <div>
      {/* <h4>{saludo}</h4> */}
      <section className="section">
        {items.map((item) => {
          return <ProductCard key={item.id} item={item} />;
        })}{" "}
      </section>
    </div>
  );
};

export default ItemList;
