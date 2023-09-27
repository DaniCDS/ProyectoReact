import CartWidget from "../../common/cardWidget/CartWidget";
// import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
// import IconButton from "@mui/material/IconButton";
// import makeStyles from "@mui/material/styles";
//import { makeStyles } from "@mui/styles";

import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";

// const useStyles = makeStyles((theme) => ({
//   offset: theme.mixins.toolbar,
// }));

const Navbar = () => {
  // const classes = useStyles();
  return (
    <div>
      {/* <h4>Logo</h4>
      <ul>
       <li>Todas</li>
        <li>Urbanas</li>
        <li>Deportivas</li>
      </ul>
      npm */}
      <AppBar>
        <Toolbar>
          <IconButton color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6"></Typography>
          <CartWidget />
        </Toolbar>
      </AppBar>
      {/* <div className={classes.offset}></div> */}
    </div>
  );
};

export default Navbar;
