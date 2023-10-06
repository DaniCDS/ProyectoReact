import { useState, useEffect } from "react";
import CounterPresentacional from "./CounterPresentacional";
import { ClassSharp } from "@mui/icons-material";

const CounterContainer = ({ stock }) => {
  const [contador, setContador] = useState(0);
  //   const stock = 5;
  const sumar = () => {
    if (contador <= stock) {
      setContador(contador + 1);
    } else {
      alert("cantidad máxima");
    }
    setContador(contador + 1);
  };
  //   const sumarX = (x) => {
  //     setContador(contador + x);
  //   };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  Console.log("Me monte o actualice");
  useEffect(
    () => {
      //aca va el codigo que no quiero que se vuelva a ejecutar
      console.log("se hizo una peticion");
    },
    [
      //cuando escuche una peticion se active
    ]
  );

  return (
    <CounterPresentacional sumar={sumar} restar={restar} contador={contador} />
  );
};

export default CounterContainer;
