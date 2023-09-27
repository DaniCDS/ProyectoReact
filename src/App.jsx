import { ThemeProvider } from "@emotion/react";
import Navbar from "./components/layout/navbar/Navbar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import { customTheme } from "../themeConfig";

function App() {
  let saludo = "Bienvenido a mi tienda virtual";

  return (
    <div>
      <ThemeProvider theme={customTheme}>
        <Navbar />
        <ItemListContainer saludo={saludo} />
      </ThemeProvider>
    </div>
  );
}

export default App;
