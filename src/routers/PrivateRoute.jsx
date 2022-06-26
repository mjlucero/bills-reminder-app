import PropTypes from "prop-types";
import { Redirect, Route } from "react-router-dom";

import { Header } from "components/Header";
import { usePrivateRouteStyles } from "./usePrivateRouteStyles";

export const PrivateRoute = ({
  isAuthencated,
  component: Component,
  ...rest
}) => {
  const classes = usePrivateRouteStyles();

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
