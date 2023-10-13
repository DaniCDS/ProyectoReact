//IMPORTAR DESESTRUCTURADA
import { ThemeProvider } from "@emotion/react";
import Navbar from "./components/layout/navbar/Navbar";
import MaterialUi from "./components/pages/MaterialUi/materialUi";
// import { Home } from "./components/pages/home/Home";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
// import Login from "./components/pages/login/Login";
import { customTheme } from "../themeConfig";
// import PruebaResponsive from "./components/pages/pruebaResponsive/PruebaResponsive";
import { makeStyles } from "@mui/material";
// import CounterContainer from "./components/common/counter/CounterContainer";
// import { useState } from "react";
// import FetchingData from "./components/pages/fechingData/FetchingData";
import ItemDetailContainer from "./components/pages/itemDetailContainer/ItemDetailContainer";
// import FetchUno from "./components/fetching/FetchUno";
// import FetchDos from "./components/fetching/FetchDos";
// import CustomModal from "./components/common/modal/CustomModal";
//import Home from "./components/pages/home/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "../src/components/pages/cart/Cart";

function App() {
  // let saludo = "Bienvenido a mi tienda virtual";
  // const [montar, setMontar] = useState(false);
  return (
    <ThemeProvider theme={customTheme}>
      <BrowserRouter>
        <Routes>
          <Route element={<Navbar />}>
            {/* <Route element={<Footer />} /> */}
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
          </Route>
          <Route path="*" element={<h1>Not found</h1>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>

    // <div>
    //   {/* <CounterContainer stock={5} />
    //   <CounterContainer stock={6} />
    //   <CounterContainer stock={9} /> */}
    //   {/* <button onClick={() => setMontar(!montar)}>Montar/Desmontar</button>
    //   {montar && <CounterContainer stock={20} />} */}

    //  {/* <Navbar />}
    //   {} <ItemDetailContainer /> */}
    //   {/* <ItemListContainer /> */}
    //   {/* <FetchingData /> */}
    //    {/* <FetchUno /> */}
    //   {/* <FetchDos /> */}
    //   {/* <CustomModal>
    //    <ItemListContainer />
    //    </CustomModal> */}

    // </div>
  );
}

export default App;
