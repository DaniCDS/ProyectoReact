import { useState } from "react";

const Login = () => {
  const [nombre, setNombre] = useState("pepe");

  const changeNombre = () => {
    setNombre("Juan");
  };

  return (
    <div>
      <h2>{nombre}</h2>
      <button onClick={changeNombre}>Cambiar nombre</button>
    </div>
  );
};

export default Login;
