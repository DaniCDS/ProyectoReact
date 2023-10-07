//IMPORTAR DESESTRUCTURADA
import { ThemeProvider } from "@emotion/react";
import Navbar from "./components/layout/navbar/Navbar";
import MaterialUi from "./components/pages/MaterialUi/materialUi";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import { customTheme } from "../themeConfig";
import CounterContainer from "./components/common/counter/CounterContainer";
import { useState } from "react";

function App() {
  // const [montar, setMontar] = useState(false);
  return (
    <div>
      <Navbar />
      {/* <button onClick={() => setMontar(!montar)}>Montar/Desmontar</button>
      {montar && <CounterContainer stock={20} />} */}

      <ThemeProvider theme={customTheme}>
        <MaterialUi />
        <ItemListContainer saludo={saludo} />
      </ThemeProvider>
    </div>
  );
}

export default App;
