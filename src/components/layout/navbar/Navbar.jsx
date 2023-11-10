import CartWidget from "../../common/cardWidget/CartWidget";
import { AppBar, Button, Toolbar } from "@mui/material";
import "./NavBar.css";
import { Link } from "react-router-dom";
import Image from "../../common/image/Image";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const categoriesCollection = collection(db, "categories");
    getDocs(categoriesCollection)
      .then((res) => {
        let arrayCategories = res.docs.map((category) => {
          return { ...category.data(), id: category.id };
        });
        setCategories(arrayCategories);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <AppBar className="miAppBar">
        <div>
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
        </div>
      </AppBar>
    </>
  );
};

export default Navbar;
