import { makeStyles } from "@material-ui/core";

export const usePrivateRouteStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
  },
  mainContent: {
    display: "flex",
    height: "calc(100% - 56px)",
    justifyContent: "center",
    padding: "16px",
    [theme.breakpoints.up("sm")]: {
      height: "calc(100% - 64px)",
    },
  },
}));
