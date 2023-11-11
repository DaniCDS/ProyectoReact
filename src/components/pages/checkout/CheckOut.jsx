import { useState, useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { serverTimestamp } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";
import "../checkout/CheckOut.css";

const CheckOut = () => {
  const [userInfo, setUserInfo] = useState({
    nombre: "",
    telefono: "",
    mail: "",
  });

  const [orderId, setOrderId] = useState(null);
  const [errors, setErrors] = useState({
    nombre: null,
    telefono: null,
    mail: null,
  });

  const { cart, getTotalPrice, clearCart } = useContext(CartContext);

  const total = getTotalPrice();
  const handleChange = (event) => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };

  const enviarFormulario = (event) => {
    event.preventDefault();
    let order = {
      buyer: userInfo,
      items: cart,
      total,
      date: serverTimestamp(),
    };

    const orderCollection = collection(db, "orders");
    addDoc(orderCollection, order).then((res) => setOrderId(res.id));

    cart.forEach((elemento) => {
      updateDoc(doc(db, "products", elemento.id), {
        stock: elemento.stock - elemento.quantity,
      });
    });
    clearCart();

    if (userInfo.nombre.length < 5 || !userInfo.mail.includes("@")) {
      if (userInfo.nombre.length < 5) {
        setErrors({
          ...errors,
          nombre: "el nombre debe tener al menos 5 caracteres",
        });
      }
      if (!userInfo.mail.includes("@")) {
        setErrors({ ...errors, mail: "No corresponde a un email válido" });
      }
      return;
    }
  };

  return (
    <>
      {orderId ? (
        <div>
          <h2>Gracias por su compra, su N° de comprobante es {orderId}</h2>
          <Link to="/">Seguir comprando</Link>
        </div>
      ) : (
        <div className="formulario">
          <form
            onSubmit={enviarFormulario}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <TextField
              type="text"
              name="nombre"
              variant="outlined"
              onChange={handleChange}
              placeholder="Nombre"
              color="primary"
              style={{ backgroundColor: "white" }}
            />
            <span style={{ color: "crimson" }}>{errors.nombre}</span>
            <TextField
              type="text"
              name="telefono"
              variant="outlined"
              onChange={handleChange}
              placeholder="Telefono"
              style={{ backgroundColor: "white" }}
            />
            <span style={{ color: "crimson" }}>{errors.apellido}</span>
            <TextField
              type="text"
              name="mail"
              variant="outlined"
              onChange={handleChange}
              placeholder="Email"
              style={{ backgroundColor: "white" }}
            />
            <span style={{ color: "crimson" }}>{errors.mail}</span>

            <button type="submit" style={{ backgroundColor: "green" }}>
              Comprar
            </button>
            <button
              type="button"
              onClick={() => console.log("se cancelo")}
              style={{ backgroundColor: "red" }}
            >
              Cancelar
            </button>
          </form>
        </div>
      )}
    </>
  );
};
export default CheckOut;
