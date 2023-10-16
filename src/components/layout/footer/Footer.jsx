import { Outlet } from "react-router-dom";
import "./Footer.css";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";
import MapIcon from "@mui/icons-material/Map";
import { Typography, Link, Container } from "@mui/material";

const Footer = () => {
  return (
    <>
      <footer className="Footer">
        <Container maxWidth="sm">
          <Typography variant="body1" align="center">
            © {new Date().getFullYear()} Daniela Palazzo Muebles de Diseño
          </Typography>
          <Typography variant="body2" color="textSecondary" align="center">
            Todos los derechos reservados.
          </Typography>
          <Typography variant="body2" color="textSecondary" align="center">
            <Link color="inherit" href="#">
              Política de Privacidad
            </Link>
            <Link color="inherit" href="#">
              Términos y Condiciones
            </Link>
          </Typography>
          <Typography variant="body2" color="textSecondary" align="center">
            <LocalPhoneIcon color="action" />
            4555-6892
          </Typography>
          <Typography variant="body2" color="textSecondary" align="center">
            <MailIcon color="action" />
            danieladp88@hotmail.com
          </Typography>
          <Typography variant="body2" color="textSecondary" align="center">
            <MapIcon color="action" />
            Av. Belgrano 1833 / Av. Belgrano 2160 / Av. Belgrano 2299
          </Typography>
          <Typography variant="body2" color="textSecondary" align="center">
            <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d6567.221476534505!2d-58.40236085928435!3d-34.61400349180214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s%20Av.%20Belgrano%201833%20%2F%20Av.%20Belgrano%202160%20%2F%20Av.%20Belgrano%202299!5e0!3m2!1ses!2sar!4v1697416186772!5m2!1ses!2sar"></iframe>
          </Typography>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
