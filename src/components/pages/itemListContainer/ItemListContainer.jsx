import ItemList from "./ItemList";
import { products } from "../../../ProductsMock";
import { useEffect, useState } from "react";

const ItemListContainer = ({ saludo, edad }) => {
  //   const { nombre, edad, x } = props;

  const [items, setItems] = useState([]);

  useEffect(() => {
    const tarea = new Primise((resolve, reject) => {
      resolve(products);
      // reject("Lo siento algo salio mal")
    });

    tarea
      .then((res) => setItems(res))
      .catch((error) => console.log("reject: ", error));
  }, []);

  console.log(items);
  return <ItemList />;
};

export default ItemListContainer;
