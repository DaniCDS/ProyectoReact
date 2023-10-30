import CounterContainer from "../../common/counter/CounterContainer";
import "./ItemDetail.css";

const ItemDetail = ({ productSelected, onAdd }) => {
  return (
    <div id="contenedor">
      <h2>{productSelected.title}</h2>
      <img src={productSelected.img} alt="" className="imagen" />
      <h5>Ya tienes {initial} en el carrito</h5>
      <CounterContainer
        stock={productSelected.stock}
        onAdd={onAdd}
        initial={initial}
      />
    </div>
  );
};

export default ItemDetail;
