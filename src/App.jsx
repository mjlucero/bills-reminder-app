import React from "react";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';

import { AppRouter } from "./routers/AppRouter";

import "./App.css";

function App() {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <AppRouter />
    </MuiPickersUtilsProvider>
  );
}

export default App;
