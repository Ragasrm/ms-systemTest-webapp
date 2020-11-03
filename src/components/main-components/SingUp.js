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
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  Select,
  MenuItem,
  InputLabel,
  CircularProgress,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { singUpFunction } from "../services/httpService";
import DialogBox from "../shared/DialogBox";
import LoaderModal from "../shared/LoaderModal";
import Alert from "@material-ui/lab/Alert";
import "../css/login.css"

export default class SingUp extends Component {
  country=[];
  constructor(props) {
    super(props);
    this.state = {

      // form state
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      gender:"",
      country:"",

      // modal state
      open: false,
      message:'',
      errmessage:'',

      // loader state
      loader:false
    };


    this.country = [
      "India","USA", "Chinna"
    ]
  }

  /******************************************* handle change methods*********************************************************************************/

  handleChange = (e) => {       
      this.setState({
        [e.target.name]: e.target.value,
      });  
   
  };

  formReset = () =>{
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      gender:"",
      country:"",
    });

  }

  handleModalClose = () =>{
    this.setState({
      open:false,
      message:'',      
    })              
    this.props.history.push("/login");
  }
  /******************************************* submit methods**************************************************************************************/
  handleSubmit = () => {
    this.setState({
      loader:true
    })
    // preparing data
    let data = {
      firstName:this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      gender:this.state.gender,
      country:this.state.country,

    }
    // signup api call
    singUpFunction(data)
      .then((res) => {        
        if (res.data.success) { 
          this.setState({
            loader:false,
            open:true,
            message: `User was registered successfully..! you can login with Registered Credentials`
          })        
        } else {
          this.formReset() // to reset form
          this.setState({
            errmessage:'User already exist..!',
            loader:false,
          })
        }
      })
      .catch((err) => {
        console.log(err.message)
        this.formReset() // to reset form
        this.setState({
          errmessage:'User already exist..!',
          loader:false,
        })
      });
  };

  /**********************************************************************************************************************
   ********************************render method*************************************************************************
   **********************************************************************************************************************/

  render() {
    return (
      <div className="container-wrapper">
        <Container component="main" maxWidth="xs">
          <div>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            {this.state.errmessage && (
            <Alert severity="error">{this.state.errmessage}</Alert>
          )}
           
            <form noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="fname"
                    name="firstName"
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    value={this.state.firstName}
                    onChange={this.handleChange}
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    value={this.state.lastName}
                    onChange={this.handleChange}
                  />
                </Grid>
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

                <Grid item xs={12}>
                <FormControl component="fieldset">
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup
                  aria-label="gender"
                  name="gender"
                  value={this.state.gender}
                  onChange={this.handleChange}
                  style={{ display: "flex", flexDirection: "row" }}
                >
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value="other" control={<Radio />} label="Other" />
                 
                </RadioGroup>
              </FormControl>
              </Grid>

              <Grid item xs={12}>
              <FormControl variant="outlined" style={{width:'400px'}}>
              <InputLabel id="demo-simple-select-outlined-label">Country</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={this.state.country}
                onChange={this.handleChange}
                label="Country"
                name="country"
              >
              {this.country.map((item, index) => (
                            <MenuItem key={index} value={item}>
                            {item}
                            </MenuItem>
              ))}
        </Select>
      </FormControl>
      </Grid>
               </Grid>
              <div style={{ marginTop: 10 }}>
                <Button
                  type="button"
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={this.handleSubmit}
                >
                  Sign Up
                </Button>
              </div>
              <Grid container>
                <Grid item className="bottom-link">
                <Link to="/Login" variant="body2">
                    Sign in
                  </Link>
                  <Link to="#" onClick={this.formReset} variant="body2">
                    Reset
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Container>      
        <DialogBox open={this.state.open} message={this.state.message} handleClose={this.handleModalClose}/>
          
        <LoaderModal open={this.state.loader}/>
      
      </div>
    );
  }
}
