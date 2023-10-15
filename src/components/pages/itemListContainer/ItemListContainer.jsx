import ItemList from "./ItemList";
import { products } from "../../../ProductsMock";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ saludo, edad }) => {
  const [items, setItems] = useState([]);
  const [isChanged, setIsChange] = useState(false);

  const { categoryName } = useParams();

  useEffect(() => {
    const productosFiltrados = products.filter(
      (product) => product.category === categoryName
    );
    const tarea = new Promise((resolve, reject) => {
      resolve(categoryName ? productosFiltrados : products);
    });

    tarea
      .then((res) => setItems(res))
      .catch((error) => console.log("reject: ", error));
  }, [categoryName]);
  return <ItemList items={items} />;
};

export default ItemListContainer;
