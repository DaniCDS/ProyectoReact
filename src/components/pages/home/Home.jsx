//EXPORTACION POR DEFECTO
// const Home = ()=>{
//     return <h1>Hola</h1>
// }
// // // //otra
//  export default Home
//PARA EXPORTAR LO DEFECTO TENGO QUE PONER LA RUTA RELATIVA EN EL ARCHIVO QUE LO UTILICE

import { useState } from "react";

// //EXPORTACION NOMBRADA
export const Home = () => {
  const [counter, setCounter] = useState(0); // Arreglo con 2 posiciones [Variable, funcion]
  const [darkMode, setDarkMode] = useState(false);
  // console.log(counter);
  // console.log(funcionCounter);

  console.log(darkMode);
  const switchMode = () => {
    setDarkMode(!darkMode);
  };

  const sumar = () => {
    setCounter(counter + 1);
    // funcionCounter(counter + 1);
  };

  return (
    <div>
      {/* <h4>{counter}</h4>
      <button onClick={sumar}>Sumar</button>
      <button onClick={switchMode}>Cambiar modo</button> */}
    </div>
  );
};
