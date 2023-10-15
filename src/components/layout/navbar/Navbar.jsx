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
              <Link to="/category/HomeOffice">
                <Button color="inherit">Home Office</Button>
              </Link>
              <Link to="/category/Living">
                <Button color="inherit">Living</Button>
              </Link>
              <Link to="/category/comedor">
                <Button color="inherit">Comedor</Button>
              </Link>
              <Link to="/category/dormitorio">
                <Button color="inherit">Dormitorio</Button>
              </Link>
            </div>
            <CartWidget />
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};

export default Navbar;
