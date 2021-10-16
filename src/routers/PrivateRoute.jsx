import PropTypes from "prop-types";
import { Redirect, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

import { Header } from "components/Header";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
  },
  mainContent: {
    height: "calc(100% - 56px)",
    [theme.breakpoints.up("sm")]: {
      height: "calc(100% - 64px)",
    },
    padding: "16px",
  },
}));

export const PrivateRoute = ({
  isAuthencated,
  component: Component,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <Route
      {...rest}
      component={(props) =>
        isAuthencated ? (
          <div className={classes.root}>
            <Header />
            <main className={classes.mainContent}>
              <Component {...props} />
            </main>
          </div>
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  isAuthencated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};
