import { createTheme } from "@mui/material";
import green from "@mui/material/colors/green";

export const customTheme = createTheme({
  palette: {
    primary: {
      main: green[600],
    },
    secondary: {
      main: "#00e5ff ",
    },
  },
});
