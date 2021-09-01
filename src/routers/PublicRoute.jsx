import React from "react";
import PropTypes from "prop-types";
import { Redirect, Route } from "react-router-dom";

export const PublicRoute = ({
  isAuthencated,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        !isAuthencated ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

PublicRoute.propTypes = {
  isAuthencated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};
