import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Login from "../../Pages/Login";
import SignUp from "../../Pages/SignUp";
import Dashboard from "../../component/Dashboard";
import styled from "styled-components";
import { LinearProgress } from "@material-ui/core";
import { compose } from "recompose";
import { connect } from "react-redux";

const PrivateRoute = ({ component, isAuth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAuth ? (
          React.createElement(component, props)
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};
const LoadingComponent = styled.div`
  opacity: {
    props=> props.loading ? 0.3 : 1;
  }
`;


const isAuth = true; // firebase auth object

const LoaderView = ({ isLoading }) => (isLoading && <div >Loading...</div>);

const mapStateToProps = state => {
  return {
    isLoading: state.global.isLoading,
  };
};

const Loader = compose(
  connect(mapStateToProps),
)(LoaderView);

const condition = false;
class AppLayout extends React.Component {
  render() {
    return (
      <LoadingComponent loading={true}>
      {condition ? <LinearProgress /> : ""}
        <Router>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/login" />} />
            <PrivateRoute
              path="/dashboard"
              component={Dashboard}
              isAuth={isAuth}
            />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
          </Switch>
          <Loader/>
        </Router>
      </LoadingComponent>
    );
  }
}

export default AppLayout;
