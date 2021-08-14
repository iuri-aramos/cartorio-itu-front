import { Link } from "react-router-dom";
import TopBar from "../components/TopBar";
import logo from "../assets/logo_header.png";
import {
  Container,
  makeStyles,
  Input,
  Paper,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "yellow",
  },
  header: {
    // display: "flex",
    // justifyContent: "space-between",
    // alignItems: "center",
    // padding: "5px 0px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
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
}));

export function Home() {
  const classes = useStyles();
  return (
    <section>
      <TopBar />
      <Container className={classes.container}>
        <header className={classes.header}>
          <Link to="/">
            <img
              className={classes.logo}
              src={logo}
              alt="Logo do Cartório de Itu"
            />
          </Link>
          <Paper elevation={1} className={classes.paper}>
            <Typography variant="h5">Andamento de títulos/certidões</Typography>
            <form noValidate autoComplete="off">
              <Input
                placeholder="Código do Protocolo"
                inputProps={{ "aria-label": "description" }}
              />
            </form>
          </Paper>
        </header>
      </Container>
    </section>
  );
}
