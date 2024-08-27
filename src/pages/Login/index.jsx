import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import { Grid, TextField, Button, Checkbox, FormControlLabel, Typography, Box, IconButton, InputAdornment } from '@mui/material';
import logo from '../../assets/images/loginLogo.png';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

function Login() {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const navigate = useNavigate();

    return (
        <Grid container justifyContent="center" alignItems="center" className="loginContainer">
            <Grid item xs={12} sm={10} md={8} lg={6} className="loginLeft loginCard"> 
                <Grid container direction="column" spacing={2} alignItems="center">
                    <Grid item className="gridPadding">
                        <img src={logo} alt="Logo" className="loginLogo"/>
                    </Grid>
                    <Grid item xs={12} className="gridPadding">
                        <Typography variant="h5" className="loginTitle">
                            <strong>Log in to your account</strong>
                        </Typography>
                        <Typography variant="subtitle1" className="loginSubtitle">
                            Welcome back! Please enter your details
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={10} className="gridPadding">
                        <Box variant="outlined" fullWidth>
                            <Typography>Email</Typography>
                            <TextField
                                variant="outlined"
                                size="small"
                                fullWidth
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
                    <Grid item xs={12} sm={10} className="gridPadding">
                        <Box fullWidth variant="outlined">
                            <Typography>Password</Typography>
                            <TextField
                                type={showPassword ? "text" : "password"}
                                variant="outlined"
                                fullWidth
                                size="small"
                                className="loginTextField"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LockOutlinedIcon />
                                        </InputAdornment>
                                    ),
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOutlinedIcon /> : <VisibilityOffOutlinedIcon />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} className="loginOptions">
                        <FormControlLabel
                            control={<Checkbox name="remember" />}
                            label="Keep me logged in"
                            className="loginCheckbox"
                        />
                        <Typography variant="body2" className="loginForgotPassword">
                            <a href="/forgotpassword">Forgot password?</a>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} className="gridPadding">
                        <Button onClick={()=>navigate("/")} variant="contained" color="primary" fullWidth className="loginButton">
                            Sign In
                        </Button>
                    </Grid>
                    <Grid item xs={12} className="loginSignUp">
                        <Typography variant="body2">
                            Don't have an account? <a href="/signup">Sign up</a>
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Login;
