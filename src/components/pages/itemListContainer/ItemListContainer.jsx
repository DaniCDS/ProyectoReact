import ItemList from "./ItemList";

const ItemListContainer = ({ saludo, edad }) => {
  //   const { nombre, edad, x } = props;

  const tarea = new Primise((resolve, reject) => {
    resolve("se resolvio la promesa");
    // reject("Lo siento algo salio mal")
  });

  tarea.then().catch();
  return (
    <div>
      <h4>{saludo}</h4>
      <h5>Mi edad es {edad}</h5>
      <ItemList />
    </div>
  );
};

export default ItemListContainer;
