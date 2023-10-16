import { useState, useEffect } from "react";
import CounterPresentacional from "./CounterPresentacional";

const CounterContainer = ({ stock, onAdd }) => {
  const [contador, setContador] = useState(1);
  const sumar = () => {
    if (contador <= stock) {
      setContador(contador + 1);
    } else {
      alert("cantidad máxima");
    }
    setContador(contador + 1);
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  console.log("Me monte o actualice");

  useEffect(() => {
    console.log("se hizo una peticion");
  }, []);

  return (
    <CounterPresentacional
      sumar={sumar}
      restar={restar}
      contador={contador}
      onAdd={onAdd}
    />
  );
};

export default CounterContainer;
