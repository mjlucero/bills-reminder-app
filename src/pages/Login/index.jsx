import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Divider from "@material-ui/core/Divider";
import Icon from "@material-ui/core/Icon";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

import { googleSignInWithPopup } from "firebase-config/google-auth";
import { signEmailUser } from "firebase-config/email-pass-auth";
import { SnackbarContext } from "context/SnackbarContext";
import { useForm } from "hooks/useForm";

const useStyles = makeStyles((theme) => ({
  LoginPageContainer: {
    alignItems: "center",
    boxSizing: "border-box",
    display: "flex",
    height: "100%",
    justifyContent: "center",
    padding: theme.spacing(2),
  },
  Loginbutton: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
  LoginInput: {
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(2),
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
  const classes = useStyles();

  const { setSnackbarState } = useContext(SnackbarContext);

  const [loginButtonLoading, setLoginButtonLoading] = useState(false);
  const [googleButtonLoading, setGoogleButtonLoading] = useState(false);

  const { formData: loginForm, handleInputChange } = useForm({
    email: "brendatfigueroa08@gmail.com",
    password: "123456",
  });

  const { email, password } = loginForm;

  const handleGoogleLogin = () => {
    setGoogleButtonLoading(true);

    googleSignInWithPopup().catch((err) => {
      setSnackbarState({
        open: true,
        message: err.code,
      });

      setGoogleButtonLoading(false);
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setLoginButtonLoading(true);

    signEmailUser(email, password).catch((err) => {
      setSnackbarState({
        open: true,
        message: err.code,
      });

      setLoginButtonLoading(false);
    });
  };

  return (
    <div className={classes.LoginPageContainer}>
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
            disabled={googleButtonLoading || loginButtonLoading}
            fullWidth
            onClick={handleLogin}
            type="submit"
            variant="contained"
          >
            {!loginButtonLoading ? "Login" : <CircularProgress size={20} />}
          </Button>
        </form>

        <Divider variant="middle" />

        <Button
          className={classes.Loginbutton}
          color="primary"
          disabled={googleButtonLoading || loginButtonLoading}
          fullWidth
          onClick={handleGoogleLogin}
          startIcon={!googleButtonLoading && <Icon className="fab fa-google" />}
          type="submit"
          variant="outlined"
        >
          {!googleButtonLoading ? (
            "Sign in with google"
          ) : (
            <CircularProgress size={20} />
          )}
        </Button>

        <div className={classes.LoginFooter}>
          <Link to="/register">Create an account</Link>
        </div>
      </Paper>
    </div>
  );
};
