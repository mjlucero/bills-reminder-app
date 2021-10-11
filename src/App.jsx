import { useState } from "react";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

import { AppRouter } from "routers/AppRouter";
import { UserContext } from "context/UserContext";

import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <UserContext.Provider value={{ user, setUser }}>
        <AppRouter />
      </UserContext.Provider>
    </MuiPickersUtilsProvider>
  );
}

export default App;
