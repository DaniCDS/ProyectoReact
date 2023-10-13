import { useEffect, useState } from "react";
import { products } from "../../../ProductsMock";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [productSelected, setProductSelected] = useState({});

  const { id } = useParams();

  useEffect(() => {
    let producto = products.find((product) => product.id === +id);

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
