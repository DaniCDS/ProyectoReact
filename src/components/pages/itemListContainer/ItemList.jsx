import ProductCard from "../../common/productCard/ProductCard";
import "./ItemListContainer.css";

const ItemList = ({ items }) => {
  return (
    <>
      <section className="section">
        {items.map((item) => {
          return <ProductCard key={item.id} item={item} className="item" />;
        })}
      </section>
    </>
  );
};

export default ItemList;
