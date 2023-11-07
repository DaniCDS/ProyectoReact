import ItemList from "./ItemList";
import { products } from "../../../productsMock";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import Skeleton from "@mui/material/Skeleton";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    const productosFiltrados = products.filter(
      (product) => product.category === categoryName
    );
    const tarea = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(categoryName ? productosFiltrados : products);
      }, 2000);
    });

    tarea.then((res) => setItems(res)).catch((error) => console.log(error));
  }, [categoryName]);
  // if (items.length === 0) {
  //   return <h1>Cargando.....</h1>;
  // }

  return (
    <>
      {items.length === 0 ? (
        // <ClimbingBoxLoader
        //   size={40}
        //   color="white"
        //   cssOverride={{
        //     display: "block",
        //     margin: "0 auto",
        //     padding: "20",
        //     borderColor: "red",
        //   }}
        // />
        <div style={{ display: "flex", gap: 20 }}>
          <div>
            <Skeleton variant="rectangular" width={250} height={120} />
            <Skeleton variant="rectangular" width={50} height={30} />
            <Skeleton variant="rectangular" width={50} height={30} />
          </div>
          <div>
            <Skeleton variant="rectangular" width={250} height={120} />
            <Skeleton variant="rectangular" width={50} height={30} />
            <Skeleton variant="rectangular" width={50} height={30} />
          </div>
        </div>
      ) : (
        <ItemList items={items} />
      )}
    </>
  );
};
export default ItemListContainer;
