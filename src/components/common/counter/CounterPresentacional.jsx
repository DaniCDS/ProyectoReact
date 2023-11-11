import { Button } from "@mui/material";

const CounterPresentacional = ({ sumar, contador, restar, onAdd }) => {
  return (
    <div>
      <Button onClick={sumar} size="small" color="primary" variant="outlined">
        +
      </Button>
      <h4>{contador}</h4>
      <Button size="small" color="primary" variant="outlined" onClick={restar}>
        -
      </Button>
      <Button
        size="small"
        color="primary"
        variant="outlined"
        onClick={() => onAdd(contador)}
      >
        Agregar al carrito
      </Button>
    </div>
  );
};

export default CounterPresentacional;
