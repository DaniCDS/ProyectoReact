import { Button, TextField, Typography } from "@mui/material";

const MaterialUi = () => {
  return (
    <div>
      <Typography color={"secondary"} varian="h1">
        Aprendiendo MUI
      </Typography>
      <Typography color={"primary"} varian="h1">
        Aprendiendo MUI
      </Typography>

      <TextField id="outlined-basic" label="Email" variant="outlined" />
      <button variant="contained" disabled={true}>
        Saludar
      </button>
    </div>
  );
};

export default MaterialUi;
