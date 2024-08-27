import React from 'react';
import {useNavigate} from "react-router-dom";
import { Grid, TextField, Button, Checkbox, FormControlLabel, Typography, Box, InputAdornment } from '@mui/material';
import logo from '../../assets/images/loginLogo.png';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

function SignUp() {
    const navigate = useNavigate();
    return (
        <Grid container className="loginContainer">
            <Grid item xs={12} sm={10} md={8} lg={6} className="loginLeft loginCard"> 
                <Grid container direction="column" spacing={2} alignItems="center">
                    <Grid item>
                        <img src={logo} alt="Logo" className="loginLogo" />
                    </Grid>
                    <Typography variant="h5" className="loginTitle">
                        Create your account
                            </Typography>
                    <Typography variant="subtitle1" className="loginSubtitle">
                        Welcome! Please enter your details
                            </Typography>
                    <Grid item xs={12} md={10} className="gridPadding">
                        <Box variant="outlined">
                            <Typography >Name</Typography>
                            <TextField
                                variant="outlined"
                                size="small"
                                className="loginTextField"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <PersonOutlinedIcon />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={10} className="gridPadding">
                        <Box variant="outlined">
                            <Typography >Email</Typography>
                            <TextField
                                variant="outlined"
                                size="small"
                                className="loginTextField"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <EmailOutlinedIcon />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={10} className="gridPadding">
                        <Box variant="outlined">
                            <Typography >Password</Typography>
                            <TextField
                                variant="outlined"
                                size="small"
                                className="loginTextField"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LockOutlinedIcon />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Box>
                    </Grid>
                    <FormControlLabel
                        control={<Checkbox name="terms" />}
                        label="I agree to the terms and conditions"
                        className="loginCheckbox"
                    />
                    <Button onClick={()=>navigate("/")} variant="contained" color="primary" className="loginButton">
                        Sign Up
                            </Button>
                    <Grid item xs={12} className="loginSignUp">
                        <Typography variant="body2">
                            Already have an account? <a href="/login">Sign in</a>
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default SignUp;
