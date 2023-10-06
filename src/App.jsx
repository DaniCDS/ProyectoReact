//IMPORTAR DESESTRUCTURADA
import { ThemeProvider } from "@emotion/react";
import Navbar from "./components/layout/navbar/Navbar";
import MaterialUi from "./components/pages/MaterialUi/materialUi";
import { Home } from "./components/pages/home/Home";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import Login from "./components/pages/login/Login";
import { customTheme } from "../themeConfig";
import PruebaResponsive from "./components/pages/pruebaResponsive/PruebaResponsive";
import { makeStyles } from "@mui/material";
import CounterContainer from "./components/common/counter/CounterContainer";
import { useState } from "react";
//import Home from "./components/pages/home/Home"

function App() {
  // let saludo = "Bienvenido a mi tienda virtual";
  const [montar, setMontar] = useState(false);
  return (
    <div>
      {/* <Home /> */}
      {/* <Login /> */}
      <Navbar />
      {/* <ItemListContainer /> */}
      {/* <CounterContainer stock={5} />
      <CounterContainer stock={6} />
      <CounterContainer stock={9} /> */}
      <button onClick={() => setMontar(!montar)}>Montar/Desmontar</button>
      {montar && <CounterContainer stock={20} />}

      <ThemeProvider theme={customTheme}>
        <MaterialUi />
        <PruebaResponsive />
      </ThemeProvider>
    </div>
  );
}

export default App;
