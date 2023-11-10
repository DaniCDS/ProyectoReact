import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import Skeleton from "@mui/material/Skeleton";
import { collection, getDocs, query, where, addDoc } from "@firebase/firestore";
import { db } from "../../../firebaseConfig";
import { Button } from "@mui/base";
import { products } from "../../../productsMock";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  // const rellenarDB = () => {
  //   const prodCollection = collection(db, "products");

  //   products.forEach((elemento) => {
  //     addDoc(prodCollection, elemento);
  //   });
  // };

  useEffect(() => {
    let productsCollection = collection(db, "products");
    let consulta = undefined;

    if (!categoryName) {
      consulta = productsCollection;
    } else {
      consulta = query(
        productsCollection,
        where("category", "==", categoryName)
      );
    }
    getDocs(consulta).then((res) => {
      let newArray = res.docs.map((product) => {
        return { ...product.data(), id: product.id };
      });
      // let arrayFiltrado = newArray.filter((elemento)=>elemento.stock > 0)
      setItems(newArray);
    });
  }, [categoryName]);

  return (
    <>
      {/* <Button varian="contained" onClick={rellenarDB}> */}
      {/* Rellenar
      </Button> */}
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
        // <h1>algo</h1>
      )}
    </>
  );
};
export default ItemListContainer;
