import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import { PhotoAlbum } from "@material-ui/icons";
const drawerWidth = 240;

const useStyles = theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3)
  }
});

const Link = [
  {
    name: "Photo",
    linkAddress: "/dashboard/photo",
    icon: <PhotoAlbum />
  }
];

class SideBar extends React.Component {
  navigate = link => event => {
    this.props.history.push(link);
  };
  render() {
    const { classes } = this.props;
    return (
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {Link.map((link, index) => (
            <ListItem
              button
              key={index}
              onClick={this.navigate(link.linkAddress)}
            >
              <ListItemIcon>{link.icon}</ListItemIcon>
              <ListItemText primary={link.name} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    );
  }
}

export default compose(
  withRouter,
  withStyles(useStyles)
)(SideBar);
