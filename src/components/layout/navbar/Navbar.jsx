import CartWidget from "../../common/cardWidget/CartWidget";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Toolbar, IconButton, Button } from "@mui/material";
import "./NavBar.css";
import { Outlet, Link } from "react-router-dom";
import Image from "../../common/image/Image";
import * as React from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";

const Navbar = () => {
  return (
    <>
      <div>
        <AppBar className="miAppBar">
          <Toolbar>
            <Link to="/">
              <Image />
            </Link>
            <Box id="Carrito">
              <CartWidget />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                "& > *": {
                  m: 1,
                },
              }}
            >
              <ButtonGroup
                className="botonesMenu"
                variant="text"
                aria-label="text button group"
                color="secondary"
              >
                <Link to="/category/HomeOffice">
                  <Button color="secondary" id="B1">
                    Home Office
                  </Button>
                </Link>
                <Link to="/category/Living">
                  <Button color="secondary" id="B2">
                    Living
                  </Button>
                </Link>
                <Link to="/category/comedor">
                  <Button color="secondary" id="B3">
                    Comedor
                  </Button>
                </Link>
                <Link to="/category/dormitorio">
                  <Button color="secondary" id="B4">
                    Dormitorio
                  </Button>
                </Link>
              </ButtonGroup>
            </Box>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};

export default Navbar;
