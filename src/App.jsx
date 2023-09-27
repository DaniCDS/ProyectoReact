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
//import Home from "./components/pages/home/Home"

function App() {
  let saludo = "Bienvenido a mi tienda virtual";

  return (
    <div>
      {/* <Home /> */}
      {/* <Login /> */}
      <Navbar />
      {/* <ItemListContainer saludo={saludo} edad={35} />  */}
      <ThemeProvider theme={customTheme}>
        <MaterialUi />
        <PruebaResponsive />
      </ThemeProvider>
    </div>
  );
}

export default App;
