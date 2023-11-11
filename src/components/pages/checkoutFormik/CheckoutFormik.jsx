import { TextField, Button } from "@mui/material";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const CheckoutFormik = () => {
  const { handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      email: "",
      password: "",
      repeatPassword: "",
    },
    onSubmit: (data) => {},
    validateOnChange: false,
    validationSchema: Yup.object({
      nombre: Yup.string()
        .required("El campo es obligatorio")
        .min(5, "Debe tener al menos 5 caracteres")
        .max(20, "no debe superar los 20 caracteres"),
      apellido: Yup.string().required("El campo es obligatorio").min(5).max(20),
      email: Yup.string()
        .email("El Email no es válido")
        .required("El campo es obligatorio"),
      password: Yup.string()
        .required("El campo es obligatorio")
        .matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,15}$/, {
          message:
            "La contraseña debe tener al menos una mayuscula, una minuscula y un numero",
        }),
      repeatPassword: Yup.string()
        .required("El campo es obligatorio")
        .oneOf([Yup.ref("password")], "Las contraseñas no coinciden"),
    }),
  });

  return (
    <div style={{ padding: "50px" }}>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nombre"
          variant="outlined"
          name="nombre"
          onChange={handleChange}
          error={errors.nombre ? true : false}
          helperText={errors.nombre}
        />
        <TextField
          label="Apellido"
          variant="outlined"
          name="apellido"
          onChange={handleChange}
          error={errors.apellido ? true : false}
          helperText={errors.apellido}
        />
        <TextField
          label="Email"
          variant="outlined"
          name="email"
          onChange={handleChange}
          error={errors.email ? true : false}
          helperText={errors.email}
        />
        <TextField
          label="Contraseña"
          variant="outlined"
          name="password"
          onChange={handleChange}
          error={errors.password ? true : false}
          helperText={errors.password}
        />
        <TextField
          label="Repetir Contraseña"
          variant="outlined"
          name="repeatPassword"
          onChange={handleChange}
          error={errors.repeatPassword ? true : false}
          helperText={errors.repeatPassword}
        />
        <Button variant="contained" type="submit">
          Enviar
        </Button>
        <Button variant={"outlined"} type="button">
          Cancelar
        </Button>
      </form>
    </div>
  );
};

export default CheckoutFormik;
