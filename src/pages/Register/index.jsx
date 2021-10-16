import { Button, TextField, Paper, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useForm } from "hooks/useForm";
import {
  createEmailUser,
  updateProfile,
} from "firebase-config/email-pass-auth";

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

export const Register = () => {
  const {
    formData: registerForm,
    handleInputChange,
    reset,
  } = useForm({
    name: "",
    email: "",
    password: "",
    repeatedPassword: "",
  });

  const classes = useStyles();

  const { name, email, password, repeatedPassword } = registerForm;

  const handleRegister = (e) => {
    e.preventDefault();

    createEmailUser(email, password).then(async ({ user }) => {
      await updateProfile(user, { displayName: name });

      reset();
    });
  };

  return (
    <Paper className={classes.LoginContainer}>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <TextField
          autoComplete="none"
          className={classes.LoginInput}
          fullWidth
          id="name"
          label="Name"
          name="name"
          onChange={handleInputChange}
          value={name}
        />
        <TextField
          autoComplete="none"
          className={classes.LoginInput}
          fullWidth
          id="email"
          label="Email"
          name="email"
          onChange={handleInputChange}
          value={email}
        />
        <TextField
          autoComplete="none"
          className={classes.LoginInput}
          fullWidth
          id="password"
          label="Password"
          name="password"
          type="password"
          onChange={handleInputChange}
          value={password}
        />
        <TextField
          autoComplete="none"
          className={classes.LoginInput}
          fullWidth
          id="repeatedPassword"
          label="Repeat your password"
          name="repeatedPassword"
          type="password"
          onChange={handleInputChange}
          value={repeatedPassword}
        />
        <Button
          className={classes.Loginbutton}
          color="primary"
          fullWidth
          type="submit"
          variant="contained"
        >
          Register
        </Button>
      </form>

      <div className={classes.LoginFooter}>
        <Link to="/login">Already register?</Link>
      </div>
    </Paper>
  );
};
