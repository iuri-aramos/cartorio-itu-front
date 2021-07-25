import { Box, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { MailOutline, Phone } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  boxMain: {
    display: "flex",
    alignContent: "center",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  spaceLeftText: {
    paddingLeft: "8px",
  },
}));
const TopBar = () => {
  const classes = useStyles();
  return (
    <Box component="div" bgcolor="primary.main" color="white" maxWidth>
      <Container>
        <Box
          display="flex"
          justifyContent="space-between"
          className={classes.boxMain}
        >
          <Box display="flex" alignContent="center">
            <Phone />
            <Typography className={classes.spaceLeftText}>
              (11) 4013-9161 / (11) 4013-2727
            </Typography>
          </Box>
          <Box display="flex" alignContent="center">
            <MailOutline />
            <Typography className={classes.spaceLeftText}>Contato</Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default TopBar;
