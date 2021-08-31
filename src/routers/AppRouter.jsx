import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "firebase-config/app-config";

import { Bill } from "pages/Bill";
import { Home } from "pages/Home";
import { Login } from "pages/Login";
import { Register } from "pages/Register";

export const AppRouter = () => {
  const [userChecking, setUserChecking] = useState(true);
  const [isLoggedIn, setisLoggedIn] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        setisLoggedIn(true);
      }

      setUserChecking(false);
    });
  }, [setUserChecking]);

  if (userChecking) {
    return <CircularProgress />;
  }

  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/bill" component={Bill} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route path="/" component={Home} />
        </Switch>
      </>
    </Router>
  );
};
