import { ThemeProvider } from "@emotion/react";
import { customTheme } from "../themeConfig";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppRouter from "./ruoter/AppRouter";
import CartContextComponent from "./context/CartContext";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={customTheme}>
        <CartContextComponent>
          <AppRouter />
        </CartContextComponent>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
