import React from "react";
import {
  Button,
  Icon,
  TextField,
  Divider,
  Paper,
  makeStyles,
  Snackbar,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { googleSignInWithPopup } from "firebase-config/google-auth";
import { useForm } from "hooks/useForm";
import { signEmailUser } from "firebase-config/email-pass-auth";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  Loginbutton: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  LoginInput: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
  LoginContainer: {
    padding: theme.spacing(2),
  },
  LoginFooter: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: theme.spacing(1),
  },
}));

export const Login = () => {
  const [snackbarState, setSnackbarState] = useState({
    open: false,
    message: "",
  });

  const { formData: loginForm, handleInputChange } = useForm({
    email: "brendatfigueroa08@gmail.com",
    password: "123456",
  });

  const classes = useStyles();

  const { email, password } = loginForm;

  const handleGoogleLogin = async () => {
    const { user } = await googleSignInWithPopup();

    console.log(`user`, user);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    signEmailUser(email, password).then(({ user }) => {
      console.log(`user`, user);
    });
  };

  return (
    <>
      <Paper className={classes.LoginContainer}>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <TextField
            autoComplete="off"
            className={classes.LoginInput}
            fullWidth
            id="email"
            label="Email"
            name="email"
            onChange={handleInputChange}
            value={email}
          />
          <TextField
            autoComplete="off"
            className={classes.LoginInput}
            fullWidth
            id="password"
            label="Password"
            name="password"
            onChange={handleInputChange}
            value={password}
          />
          <Button
            className={classes.Loginbutton}
            color="primary"
            fullWidth
            onClick={handleLogin}
            type="submit"
            variant="contained"
          >
            Login
          </Button>
        </form>

        <Divider variant="middle" />

        <Button
          className={classes.Loginbutton}
          color="primary"
          fullWidth
          onClick={handleGoogleLogin}
          startIcon={<Icon className="fab fa-google" />}
          type="submit"
          variant="outlined"
        >
          Sign in with google
        </Button>

        <div className={classes.LoginFooter}>
          <Link to="/register">Create an account</Link>
        </div>
      </Paper>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={snackbarState.open}
        message={snackbarState.message}
      />
    </>
  );
};
