import { Link } from "react-router-dom";
import logo from "../assets/logo_header.png";
import {
  Container,
  makeStyles,
  Input,
  Paper,
  Typography,
} from "@material-ui/core";
import { Line } from "./Line";

const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    "& > *": {
      margin: theme.spacing(4, 2),
    },
  },
  logo: {
    paddingRight: "40px",
  },
  paper: {
    padding: theme.spacing(4),
  },
  paperTypoghraphy: {
    paddingBottom: "10px",
  },
  lineBottom: {
    borderBottom: "8px solid black",
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <div>
      <Container>
        <header className={classes.header}>
          <Link to="/">
            <img
              className={classes.logo}
              src={logo}
              alt="Logo do Cartório de Itu"
            />
          </Link>
          <Paper elevation={1} className={classes.paper}>
            <Typography variant="h5" className={classes.paperTypoghraphy}>
              Andamento de títulos/certidões
            </Typography>
            <form noValidate autoComplete="off">
              <Input
                placeholder="Código do Protocolo"
                inputProps={{ "aria-label": "description" }}
              />
            </form>
          </Paper>
        </header>
      </Container>
      <Line />
    </div>
  );
}
