import { useState } from "react";

// //EXPORTACION NOMBRADA
export const Home = () => {
  const [counter, setCounter] = useState(0); // Arreglo con 2 posiciones [Variable, funcion]
  const [darkMode, setDarkMode] = useState(false);

  const switchMode = () => {
    setDarkMode(!darkMode);
  };

  const sumar = () => {
    setCounter(counter + 1);
  };

  return <div></div>;
};
