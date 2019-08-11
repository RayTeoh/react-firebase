import React from "react";
import Typography from "@material-ui/core/Typography";
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  withStyles
} from "@material-ui/core";
import { Person as AccountIcon } from "@material-ui/icons";

const drawerWidth = 240;

const Styles = theme => ({
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth
  },
  headerMenu: {
    marginTop: theme.spacing.unit * 7
  },
  headerMenuButton: {
    marginLeft: theme.spacing.unit * 2,
    padding: theme.spacing.unit / 2
  },
  headerIcon: {
    fontSize: 28,
    color: "rgba(255, 255, 255, 0.35)"
  },
  grow: {
    flexGrow: 1
  }
});

class Header extends React.Component {
  state = {
    menu: null
  };

  openMenuClick = event => {
    this.setState({ menu: event.currentTarget });
  };
  handleMenuClose = () => {
    this.setState({ menu: null });
  };

  handleProfile = event => {
    event.preventDefault();
  };

  handleLogout = event => {
    event.preventDefault();
  };

  render() {
    const { classes, name } = this.props;
    const { menu } = this.state;
    return (
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Photo Gallery Apps
          </Typography>
          <span>{name}</span>
          <div className={classes.grow} />
          <IconButton
            aria-haspopup="true"
            color="inherit"
            className={classes.headerMenuButton}
            aria-controls="profile-menu"
            onClick={this.openMenuClick}
          >
            <AccountIcon classes={{ root: classes.headerIcon }} />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={menu}
            keepMounted
            open={Boolean(menu)}
            onClose={this.handleMenuClose}
          >
            <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(Styles)(Header);
