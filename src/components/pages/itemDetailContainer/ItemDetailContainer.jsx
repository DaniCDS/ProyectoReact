import { useContext, useEffect, useState } from "react";
import { products } from "../../../productsMock";
import ItemDetail from "./ItemDetail";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

const ItemDetailContainer = () => {
  const [productSelected, setProductSelected] = useState({});

  const { id } = useParams();

  const { addToCart, getQuantityById } = useContext(CartContext);
  let totalQuantity = getQuantityById(+id);
  console.log(totalQuantity);

  const navegar = useNavigate();

  useEffect(() => {
    let producto = products.find((product) => product.id === +id);

    const getProduct = new Promise((resolve) => {
      resolve(producto);
    });
    getProduct
      .then((res) => setProductSelected(res))
      .catch((err) => console.log(err));
  }, [id]);
  const onAdd = (cantidad) => {
    let item = {
      ...productSelected,
      quantity: cantidad,
    };

    addToCart(item);

    setTimeout(() => {
      navegar("/cart");
    });
  };
  return (
    <ItemDetail
      productSelected={productSelected}
      onAdd={onAdd}
      initial={totalQuantity}
    />
  );
};

export default ItemDetailContainer;
