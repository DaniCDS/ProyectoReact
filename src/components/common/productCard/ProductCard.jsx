import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const ProductCard = ({ item }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
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
        <Button size="small" color="primary" variant="outlined">
          Ver Detalle
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
