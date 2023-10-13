import CartWidget from "../../common/cardWidget/CartWidget";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Toolbar, IconButton, Button } from "@mui/material";
import "./NavBar.css";
import { Outlet, Link } from "react-router-dom";
import Image from "../../common/image/Image";

const Navbar = () => {
  return (
    <>
      <div>
        <AppBar>
          <Toolbar>
            <IconButton color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Link to="/">
              <Image />
              <h6>Muebles de Diseño</h6>
            </Link>
            <div className="botonesMenu">
              <Button color="inherit">Home Office</Button>
              <Button color="inherit">Living</Button>
              <Button color="inherit">Comedor</Button>
              <Button color="inherit">Dormitorio</Button>
            </div>
            {/* <Link to="/cart">Ir a pepito</Link> */}
            <CartWidget />
          </Toolbar>
        </AppBar>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
