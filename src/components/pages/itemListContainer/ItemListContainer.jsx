import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import Skeleton from "@mui/material/Skeleton";
import { collection, getDocs, query, where, addDoc } from "@firebase/firestore";
import { db } from "../../../firebaseConfig";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

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
      setItems(newArray);
    });
  }, [categoryName]);

  return (
    <>
      {items.length === 0 ? (
        <div style={{ display: "flex", gap: 20 }}>
          <div>
            <Skeleton
              variant="rectangular"
              width={250}
              height={120}
              style={{ backgroundColor: "#9FD589" }}
            />
            <Skeleton
              variant="rectangular"
              width={50}
              height={30}
              style={{ backgroundColor: "#9FD589" }}
            />
            <Skeleton
              variant="rectangular"
              width={50}
              height={30}
              style={{ backgroundColor: "#9FD589" }}
            />
          </div>
          <div>
            <Skeleton
              variant="rectangular"
              width={250}
              height={120}
              style={{ backgroundColor: "#9FD589" }}
            />
            <Skeleton
              variant="rectangular"
              width={50}
              height={30}
              style={{ backgroundColor: "#9FD589" }}
            />
            <Skeleton
              variant="rectangular"
              width={50}
              height={30}
              style={{ backgroundColor: "#9FD589" }}
            />
          </div>
          <div>
            <Skeleton
              variant="rectangular"
              width={250}
              height={120}
              style={{ backgroundColor: "#9FD589" }}
            />
            <Skeleton
              variant="rectangular"
              width={50}
              height={30}
              style={{ backgroundColor: "#9FD589" }}
            />
            <Skeleton
              variant="rectangular"
              width={50}
              height={30}
              style={{ backgroundColor: "#9FD589" }}
            />
          </div>
          <div>
            <Skeleton
              variant="rectangular"
              width={250}
              height={120}
              style={{ backgroundColor: "#9FD589" }}
            />
            <Skeleton
              variant="rectangular"
              width={50}
              height={30}
              style={{ backgroundColor: "#9FD589" }}
            />
            <Skeleton
              variant="rectangular"
              width={50}
              height={30}
              style={{ backgroundColor: "#9FD589" }}
            />
          </div>
        </div>
      ) : (
        <ItemList items={items} />
      )}
    </>
  );
};
export default ItemListContainer;
