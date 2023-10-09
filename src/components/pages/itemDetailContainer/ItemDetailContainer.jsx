import { useEffect, useState } from "react";
import { products } from "../../../ProductsMock";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [productSelected, setProductSelected] = useState({});

  let id = 1;

  useEffect(() => {
    let producto = products.find((product) => product.id === id);

    const getProduct = new Promise((resolve, reject) => {
      resolve(producto);
    });
    getProduct
      .then((res) =>
        // setItem(producto)
        setProductSelected(res)
      )
      .catch((err) => console.log(err));
  }, [id]);
  const onAdd = (cantidad) => {
    console.log("se agrego al carrito", productSelected);
    console.log(cantidad);

    let obj = {
      ...productSelected,
      quantity: cantidad,

      // title: productSelected.title,
      // price: productSelected.price,
      // img: productSelected.img,
      // quantity: cantidad
    };
  };
  // console.log(productSelected);
  return <ItemDetail productSelected={productSelected} onAdd={onAdd} />;
};

export default ItemDetailContainer;
