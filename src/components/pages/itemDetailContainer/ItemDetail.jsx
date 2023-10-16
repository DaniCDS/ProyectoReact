import CounterContainer from "../../common/counter/CounterContainer";
import "./ItemDetail.css";

const ItemDetail = ({ productSelected, onAdd }) => {
  return (
    <div id="contenedor">
      <h2>{productSelected.title}</h2>
      <img src={productSelected.img} alt="" className="imagen" />
      <CounterContainer stock={productSelected.stock} onAdd={onAdd} />
    </div>
  );
};

export default ItemDetail;
