import CartWidget from "../../common/cardWidget/CartWidget";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Toolbar, Typography, IconButton, Button } from "@mui/material";
import "./NavBar.css";

const Navbar = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <IconButton color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>

          <h3>DP</h3>
          <br />
          <h6>Muebles de Diseño</h6>
          <div class="botonesMenu">
            <Button color="inherit">Home Office</Button>
            <Button color="inherit">Living</Button>
            <Button color="inherit">Comedor</Button>
            <Button color="inherit">Dormitorio</Button>
          </div>

          <CartWidget />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
