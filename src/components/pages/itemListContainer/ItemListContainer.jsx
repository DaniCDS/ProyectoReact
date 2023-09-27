const ItemListContainer = ({ saludo, edad }) => {
  //   const { nombre, edad, x } = props;

  return (
    <div>
      <h4>{saludo}</h4>
      <h5>Mi edad es {edad}</h5>
    </div>
  );
};

export default ItemListContainer;
