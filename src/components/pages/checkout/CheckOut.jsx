import { useState, useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { serverTimestamp } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { red } from "@mui/material/colors";
import { Link } from "react-router-dom";

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
        <div>
          <form onSubmit={enviarFormulario}>
            <input
              type="text"
              name="nombre"
              onChange={handleChange}
              placeholder="Nombre"
            />
            <span style={{ color: "crimson" }}>{errors.nombre}</span>
            <input
              type="text"
              name="telefono"
              onChange={handleChange}
              placeholder="Telefono"
            />
            <span style={{ color: "crimson" }}>{errors.apellido}</span>
            <input
              type="text"
              name="mail"
              onChange={handleChange}
              placeholder="Email"
            />
            <span style={{ color: "crimson" }}>{errors.mail}</span>

            <button type="submit"> Enviar </button>
            <button type="button" onClick={() => console.log("se cancelo")}>
              Cancelar
            </button>
          </form>
        </div>
      )}
    </>
  );
};
export default CheckOut;
