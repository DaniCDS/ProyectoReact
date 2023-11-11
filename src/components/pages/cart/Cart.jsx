import { Button, IconButton } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const Cart = () => {
  const { cart, clearCart, deleteProductById, getTotalPrice } =
    useContext(CartContext);

  let total = getTotalPrice();

  const clearCarWithAlert = () => {
    Swal.fire({
      title: "Seguro querés limpiar el carrito?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Si, eliminar",
      denyButtonText: `No! Me equivoqué`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Carrito eliminado", "", "success");
      } else if (result.isDenied) {
        Swal.fire("El carrito no se modificó", "", "warning");
      }
    });
  };

  return (
    <div>
      <h1>Estoy en el carrito</h1>

      {cart.map((product) => (
        <div key={product.id} style={{ border: "2px solid white" }}>
          <h2>{product.title}</h2>
          <h2>{product.price}</h2>
          <h3>Cantidad: {product.quantity}</h3>
          <IconButton onClick={() => deleteProductById(product.id)}>
            <DeleteForeverIcon color="primary" />
          </IconButton>
        </div>
      ))}

      {cart.length > 0 && (
        <div>
          <h2>El total a pagar es: ${total}</h2>
          <Link to="/checkout">
            <Button variant="contained">Finalizar Compra</Button>
          </Link>

          <Button variant="contained" onClick={clearCarWithAlert}>
            Vaciar Carrito
          </Button>
        </div>
      )}
    </div>
  );
};

export default Cart;
