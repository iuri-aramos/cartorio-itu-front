import { AppBar, Box, Hidden, IconButton, Toolbar } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
const Header = () => {
  return (
    <Box>
      <AppBar>
        <Toolbar>
          <Hidden smUp>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <Menu />
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
