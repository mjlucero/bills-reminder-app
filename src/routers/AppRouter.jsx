import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "firebase-config/app-config";

import { Bill } from "pages/Bill";
import { Home } from "pages/Home";
import { Login } from "pages/Login";
import { Register } from "pages/Register";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  const [userChecking, setUserChecking] = useState(true);
  const [isLoggedIn, setisLoggedIn] = useState(false);

  useEffect(() => {
    const authSubscription = onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        setisLoggedIn(true);
      } else {
        setisLoggedIn(false);
      }

      setUserChecking(false);
    });

    return () => authSubscription();
  }, []);

  if (userChecking) {
    return <CircularProgress />;
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
