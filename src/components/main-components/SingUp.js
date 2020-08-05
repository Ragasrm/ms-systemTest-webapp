import React, { Component } from 'react'
import { Container, Typography, Grid, TextField, CssBaseline, FormControlLabel, Button, Box, Checkbox } from '@material-ui/core'
import { Link } from 'react-router-dom'
import {singUpFunction } from '../services/httpService';


export default class SingUp extends Component {

    constructor(props) {
        super(props)
        this.state = {
             firstName:'',
             lastName:'',
             email:'',
             password:''
        }
    }



    handleChange = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    
    }

    handleSubmit = () =>{
        let data = this.state      
        singUpFunction(data).then(res =>{
            if(res){
                alert('User was registered successfully..! you can login with Registered Credentials')
                this.setState({
                    firstName:'',
                    lastName:'',
                    email:'',
                    password:''
                })
                this.props.history.push("/login");
            }
        }).catch(err => console.log(err.message))
    }
    
    render() {
        return (

            <div>
                 <Container component="main" maxWidth="xs">
              
                    <div>
                
                    <Typography component="h1" variant="h5">
                    Sign up
                    </Typography>
                    <form  noValidate>
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
                    
                    </Grid>
                    <div style={{marginTop:10}}>
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
                    <Grid container justify="flex-end">
                        <Grid item>
                        <Link to="/Login" variant="body2">
                            Sign in
                        </Link>
                        </Grid>
                    </Grid>
                    </form>
                </div>
                
                </Container>
            </div>
        )
    }
}
