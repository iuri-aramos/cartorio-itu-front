import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import privacidadeDados from "../assets/privacidade_dados.jpg";
import objetivosSustentaveis from "../assets/objetivos_sustentaveis.png";
import { Line } from "./Line";

const useStyles = makeStyles((theme) => ({
  general: {
    marginTop: "2%",
    marginBottom: "2%",
  },
  images: {
    [theme.breakpoints.down("xs")]: {
      width: "410px",
    },
  },
}));

export default function NotificationImages() {
  const classes = useStyles();
  return (
    <div>
      <Container className={classes.general}>
        <img
          className={classes.images}
          src={privacidadeDados}
          alt="Privacidade dos dados"
        />
        <br />
        <img
          className={classes.images}
          src={objetivosSustentaveis}
          alt="Privacidade dos dados"
        />
      </Container>
      <Line />
    </div>
  );
}
