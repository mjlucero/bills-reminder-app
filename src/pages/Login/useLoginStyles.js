const { makeStyles } = require("@material-ui/core");

export const useLoginStyles = makeStyles((theme) => ({
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
