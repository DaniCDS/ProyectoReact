import { ThemeProvider } from "@emotion/react";
import MaterialUi from "./components/pages/MaterialUi/materialUi";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import { customTheme } from "../themeConfig";
import { makeStyles } from "@mui/material";
import ItemDetailContainer from "./components/pages/itemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "../src/components/pages/cart/Cart";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={customTheme}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/category/:categoryName"
              element={<ItemListContainer />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
          </Route>
          <Route path="*" element={<h1>Not found</h1>} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
