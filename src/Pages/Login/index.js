import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { compose } from "recompose";
import { TextField } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { setUser } from "../../actions/user";
import { setIsLoading } from "../../actions/global";

const styles = theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
});

class Login extends React.Component {
  state = {
    email: "",
    password: ""
  };

  textOnChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  formSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    const { history } = this.props;
    
    this.props.setIsLoading(true);
    setTimeout(
      () => {
        this.props.setUser(email, password, history);
        this.props.setIsLoading(false);
        
      },3000);
  };

  render() {
    const { classes } = this.props;
    return (
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} onSubmit={this.formSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Email Address"
              name="email"
              onChange={this.textOnChange("email")}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              onChange={this.textOnChange("password")}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link to="/signup">{"Don't have an account? Sign Up"}</Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}

export default compose(
  connect(
    null,
    dispatch => bindActionCreators({ setUser, setIsLoading }, dispatch)
  ),
    withStyles(styles))(Login);
