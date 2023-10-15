const CounterPresentacional = ({ sumar, contador, restar, onAdd }) => {
  return (
    <div>
      <button onClick={sumar}>sumar</button>
      <h4>{contador}</h4>
      <button onClick={restar}>restar</button>
      <button onClick={(contador) => onAdd()}>Agregar al carrito</button>
    </div>
  );
};

export default CounterPresentacional;
