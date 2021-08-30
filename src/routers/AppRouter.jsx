import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Bill } from "pages/Bill";
import { Home } from "pages/Home";
import { Login } from "pages/Login";

export const AppRouter = () => {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/bill" component={Bill} />
          <Route exact path="/login" component={Login} />
          <Route path="/" component={Home} />
        </Switch>
      </>
    </Router>
  );
};
