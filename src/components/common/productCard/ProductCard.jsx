import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({ item, deleteProducts, modificar }) => {
  return (
    <Card sx={{ Width: 345 }}>
      <CardActionArea>
        <CardMedia
          sx={{ height: 140 }}
          image={item.img}
          title={`mueble ${item.title}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            {item.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ${item.price}.-
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/itemDetail/${item.id}`}>
          <Button size="small" color="primary" variant="outlined">
            Ver Detalle
          </Button>
        </Link>
        {/* <Button
          size="small"
          variant="contained"
          onClick={() => deleteProducts(item.id)}
        >
          Eliminar
        </Button> */}
        {/* <Button
          size="small"
          variant="contained"
          onClick={() => modificar(item.id)}
        >
          Modificar
        </Button> */}
      </CardActions>
    </Card>
  );
};

export default ProductCard;
