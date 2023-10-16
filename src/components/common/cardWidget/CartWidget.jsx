import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <Link to="/cart">
      <Badge
        badgeContent={0}
        showZero
        color="secondary"
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <ShoppingCartIcon
          color="action"
          id="Carrito"
          fontSize="Large"
          sx={{ fontSize: 30 }}
        />
      </Badge>
    </Link>
  );
};

export default CartWidget;
