import PropTypes from "prop-types";
import { Redirect, Route } from "react-router-dom";
import { Header } from "components/Header";

export const PrivateRoute = ({
  isAuthencated,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        isAuthencated ? (
          <div className="page-container">
            <Header />
            <Component {...props} />
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
