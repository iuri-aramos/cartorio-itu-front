import { Box, CardMedia, Grid, Hidden, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Menu } from "@material-ui/icons";

const useStyles = makeStyles({
  logo: {
    background: "yellow",
  },
});
const Header = () => {
  const classes = useStyles();
  return (
    <Grid container component="main" className={classes.root}>
      <Box>
        <Hidden smUp>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <Menu />
          </IconButton>
        </Hidden>
      </Box>
      <Grid item>
        <CardMedia
          className={classes.logo}
          image="../images/logo_header.png"
          title="Paella dish"
        />
      </Grid>
    </Grid>
  );
};

export default Header;
