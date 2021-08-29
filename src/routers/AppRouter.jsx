import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Bill } from "../pages/Bill";

export const AppRouter = () => {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/bill" component={Bill} />
          <Route path="/" component={Home} />
        </Switch>
      </>
    </Router>
  );
};
