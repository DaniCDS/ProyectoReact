import ItemList from "./ItemList";
import { products } from "../../../ProductsMock";
import { useEffect, useState } from "react";

const ItemListContainer = ({ saludo, edad }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const tarea = new Promise((resolve, reject) => {
      resolve(products);
    });

    tarea
      .then((res) => setItems(res))
      .catch((error) => console.log("reject: ", error));
  }, []);

  console.log(items);
  return <ItemList items={items} />;
};

export default ItemListContainer;
