import ItemList from "./ItemList";
import { products } from "../../../productsMock";

const ItemListContainer = ({ saludo, edad }) => {
  //   const { nombre, edad, x } = props;

  const tarea = new Primise((resolve, reject) => {
    resolve(products);
    // reject("Lo siento algo salio mal")
  });

  tarea
    .then((res) => console.log("resolve: ", res))
    .catch((error) => console.log("reject: ", error));

  return (
    <div>
      <h4>{saludo}</h4>
      <h5>Mi edad es {edad}</h5>
      <ItemList />
    </div>
  );
};

export default ItemListContainer;
