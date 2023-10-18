import { useEffect, useState } from "react";
import { products } from "../../../productsMock";
import ItemDetail from "./ItemDetail";
import { useParams, useNavigate } from "react-router-dom";

const ItemDetailContainer = () => {
  const [productSelected, setProductSelected] = useState({});

  const { id } = useParams();

  const navegar = useNavigate();

  useEffect(() => {
    let producto = products.find((product) => product.id === +id);

    const getProduct = new Promise((resolve, reject) => {
      resolve(producto);
    });
    getProduct
      .then((res) => setProductSelected(res))
      .catch((err) => console.log(err));
  }, [id]);
  const onAdd = (cantidad) => {
    console.log("se agrego al carrito", productSelected);
    console.log(cantidad);

    let obj = {
      ...productSelected,
      quantity: cantidad,
    };
    setTimeout(() => {
      navegar("/cart");
    });
  };
  return <ItemDetail productSelected={productSelected} onAdd={onAdd} />;
};

export default ItemDetailContainer;
