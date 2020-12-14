import React, { Component } from "react";
import {
  Container,
  Typography,
  Grid,
  TextField,
  CssBaseline,
  FormControlLabel,
  Button,
  Box,
  Checkbox,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { authenticateLogin } from "../services/httpService";
import Alert from "@material-ui/lab/Alert";
import '../css/login.css'
import { connect } from "react-redux";
import { login } from '../../redux/actions/auth.actions'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      message: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  isFormValid = () => {
    return !(this.state.email.length === 0 || this.state.password.length === 0);
  };

  handleSubmit = async () => {
    try {
      const res =  await authenticateLogin({
          username: this.state.email,
          password: this.state.password,
        });
      localStorage.setItem("isAuthenticated", res.data.success);
  } catch(err) {
      console.log(err);
  }
    this.props.dispatch(login(this.state.email, this.state.password))
  };

  componentDidUpdate() {
    console.log('componentDidUpdate', this.props)
    if(this.props.auth.loggedIn) {
      this.props.history.push("/main");
    }
  }

  render() {
    return (
      <div className="container-wrapper">
        <Container component="main" maxWidth="xs">
          {this.state.message && (
            <Alert severity="error"> {this.state.message}</Alert>
          )}
          <div>
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <form noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="User Name"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </Grid>
              </Grid>
              <div style={{ marginTop: 10 }}>
                <Button
                  type="button"
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={this.handleSubmit}
                  disabled={!this.isFormValid()}
                >
                  do Login
                </Button>
              </div>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link to="/SignUp" variant="body2">
                    Sign Up
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    auth: store.auth
  }
}

export default connect(mapStateToProps)(Login)