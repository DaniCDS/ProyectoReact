import ItemList from "./ItemList";
import { products } from "../../../productsMock";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = ({}) => {
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
