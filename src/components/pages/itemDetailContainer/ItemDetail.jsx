import CounterContainer from "../../common/counter/CounterContainer";

const ItemDetail = ({ productSelected, onAdd }) => {
  return (
    <div>
      {/*Aca el detalle*/}
      <h2>{productSelected.title}</h2>
      {/*aca el contador*/}
      <CounterContainer stock={productSelected.stock} onAdd={onAdd} />
    </div>
  );
};

export default ItemDetail;
