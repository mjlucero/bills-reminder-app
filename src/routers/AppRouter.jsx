import { useEffect, useState, useContext } from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";

import { auth } from "firebase-config/app-config";
import { Bill } from "pages/Bill";
import { Home } from "pages/Home";
import { Login } from "pages/Login";
import { onAuthStateChanged } from "firebase/auth";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { Register } from "pages/Register";
import { UserContext } from "context/UserContext";
import { useAppRouterStyles } from "./useAppRouterStyles";

export const AppRouter = () => {
  const classes = useAppRouterStyles();

  const { setUser } = useContext(UserContext);

  const [userChecking, setUserChecking] = useState(true);
  const [isLoggedIn, setisLoggedIn] = useState(false);

  useEffect(() => {
    const authSubscription = onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        const { uid, displayName, email, photoURL } = user;

        setUser({ uid, displayName, email, photoURL });
        setisLoggedIn(true);
      } else {
        setUser(null);
        setisLoggedIn(false);
      }

      setUserChecking(false);
    });

    return () => authSubscription();
  }, [setUser]);

  if (userChecking) {
    return (
      <div className={classes.loaderContainer}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <Router>
      <>
        <Switch>
          <PublicRoute
            exact
            path="/login"
            isAuthencated={isLoggedIn}
            component={Login}
          />
          <PublicRoute
            exact
            isAuthencated={isLoggedIn}
            path="/register"
            component={Register}
          />
          <PrivateRoute
            exact
            isAuthencated={isLoggedIn}
            path="/bill"
            component={Bill}
          />
          <PrivateRoute
            exact
            isAuthencated={isLoggedIn}
            path="/"
            component={Home}
          />
          <Redirect to="/login" />
        </Switch>
      </>
    </Router>
  );
};
