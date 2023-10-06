import ItemList from "./ItemList";

const ItemListContainer = ({ saludo, edad }) => {
  //   const { nombre, edad, x } = props;

  return (
    <div>
      <h4>{saludo}</h4>
      <h5>Mi edad es {edad}</h5>
      <ItemList />
    </div>
  );
};

export default ItemListContainer;
