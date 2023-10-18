import { useState } from "react";

const CheckOut = () => {
  const [userInfo, setUserInfo] = useState({
    nombre: "",
    apellido: "",
    mail: "",
  });
  const [errors, setErrors] = useState({
    nombre: null,
    apellido: null,
    mail: null,
  });
  const handleChange = (event) => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };

  const enviarFormulario = (event) => {
    event.preventDefault();
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
  console.log(userInfo);

  return (
    <div>
      <h1>Estoy en el checkOut</h1>
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
          name="apellido"
          onChange={handleChange}
          placeholder="Apellido"
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
  );
};
export default CheckOut;
