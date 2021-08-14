import { Box, Button, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { MailOutline, Phone } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  boxMain: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "7px 0px",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      alignItems: "center",
      padding: "7px 0px",
    },
  },
  spaceLeftText: {
    paddingLeft: "8px",
  },
  button: {
    color: "white",
    border: "solid 1px",
  },
}));

export default function TopBar() {
  const history = useHistory();
  const classes = useStyles();

  function openFormTest() {
    history.push("/teste");
  }
  return (
    <Box bgcolor="primary.main" color="white">
      <Container>
        <Box className={classes.boxMain}>
          <Box display="flex" alignContent="center">
            <Phone />
            <Typography className={classes.spaceLeftText}>
              (11) 4013-9161 / (11) 4013-2727
            </Typography>
          </Box>
          <Box display="flex" alignContent="center">
            <Button className={classes.button} onClick={openFormTest}>
              <MailOutline />
              <Typography className={classes.spaceLeftText}>Contato</Typography>
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
