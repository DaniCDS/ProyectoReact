import ItemList from "./ItemList";
import { products } from "../../../ProductsMock";

const ItemListContainer = ({ saludo, edad }) => {
  //   const { nombre, edad, x } = props;

  const tarea = new Primise((resolve, reject) => {
    resolve(products);
    // reject("Lo siento algo salio mal")
  });

  tarea.then((res) => console.log(res)).catch((error) => console.log(error));
  return <ItemList />;
};

export default ItemListContainer;
