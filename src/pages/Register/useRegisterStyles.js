const { makeStyles } = require("@material-ui/core");

export const useRegisterStyles = makeStyles((theme) => ({
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
