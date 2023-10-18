import { ThemeProvider } from "@emotion/react";
import { customTheme } from "../themeConfig";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppRouter from "./ruoter/AppRouter";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={customTheme}>
        <AppRouter />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
