import ProductCard from "../../common/productCard/ProductCard";
import "./ItemListContainer.css";

const ItemList = ({ items, crearNuevo, deleteProducts, modificar }) => {
  return (
    <>
      <div>
        <button onClick={crearNuevo}>Crear</button>
      </div>
      <section
        className="section"
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          gap: 20,
          flexWrap: "wrap",
        }}
      >
        {items.map((item) => {
          return (
            <ProductCard
              key={item.id}
              item={item}
              className="item"
              deleteProducts={deleteProducts}
              modificar={modificar}
            />
          );
        })}
      </section>
    </>
  );
};

export default ItemList;
