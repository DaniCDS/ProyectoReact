import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  return (
    <Card className="Card">
      <CardActionArea>
        <CardMedia
          sx={{ width: 400, height: 350 }}
          image={item.img}
          title={`mueble ${item.title}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="h6" color="text.secondary" id="descripcion">
            {item.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ${item.price}.-
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {item.stock > 0 ? (
          <Link to={`/itemDetail/${item.id}`}>
            <Button size="small" color="primary" variant="outlined">
              Ver Detalle
            </Button>
          </Link>
        ) : (
          <Button variant="contained" disabled>
            Sin stock
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default ProductCard;
