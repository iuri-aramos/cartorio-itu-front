import { Box, Container, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import GoogleMapsMarker from "./map/GoogleMaps";

const useStyles = makeStyles((theme) => ({
  general: {
    marginTop: "2%",
    marginBottom: "2%",
    backroundColor: 'yellow'
  },
  images: {
    [theme.breakpoints.down("xs")]: {
      width: "410px",
    },
  },
  box: {
    display: "flex",
    justifyContent: "space-around",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  boxItem: {
    width: "310px",
    marginLeft: "10px",
    marginRight: "10px",
    [theme.breakpoints.down("xs")]: {
      width: "550px",
      marginLeft: "0px",
      marginRight: "0px",
      marginTop: "10px",
      marginBottom: "10px",
    },
    background: "#efefef",
  }
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <div>
      <Container className={classes.general}>
        <Box className={classes.box}>
          <Paper variant="outlined" className={classes.boxItem}>
            <Typography variant="body1">Links Utéis</Typography>
          </Paper>
          <Paper variant="outlined">
            <Typography variant="body1">
              <GoogleMapsMarker />
            </Typography>
          </Paper>
          <Paper variant="outlined" className={classes.boxItem}>
            <Typography variant="body1">Registro de Imóveis/Títulos e
              Documentos/Pessoas Juridicas
              Atendimento: de Segunda a Sexta, das 9 às 16 horas
              Contato: (11) 4013-9161
            </Typography>
          </Paper>
        </Box>
      </Container>
    </div>
  );
}
