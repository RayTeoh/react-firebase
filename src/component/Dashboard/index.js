import React from "react";
import { withStyles } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../Header";
import SideBar from "../SideBar";
import Album from "../../Pages/Album";
import Homepage from "../../Pages/HomePage";
import { connect } from "react-redux";

import { compose } from "recompose";
// pages

const Layout = ({ classes, email = "guest" }) => {
  return (
    <div className={classes.root}>
      <BrowserRouter>
        <React.Fragment>
          <Header name="" />
          <SideBar />
          <div className={classes.content}>
            <div className={classes.fakeToolbar} />
            <Switch>
              <Route path="/dashboard/photo" component={Album} />
              <Route path="/dashboard/home" component={Homepage} />
            </Switch>
            <div>{email}</div>
          </div>
        </React.Fragment>
      </BrowserRouter>
    </div>
  );
};

const styles = theme => ({
  root: {
    maxWidth: "100vw",
    overflowX: "hidden"
  },
  content: {
    padding: "0 40px 0 40px",
    marginLeft: "240px"
  },
  fakeToolbar: {
    ...theme.mixins.toolbar
  }
});

const mapStateToProps = state => {
  return {
    email: state.user.email
  };
};

export default compose(
  connect(mapStateToProps),
  withStyles(styles)
)(Layout);
