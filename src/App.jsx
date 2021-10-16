import { useState } from "react";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Snackbar from "@material-ui/core/Snackbar";

import { AppRouter } from "routers/AppRouter";
import { SnackbarContext } from "context/SnackbarContext";
import { UserContext } from "context/UserContext";

import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [snackbarState, setSnackbarState] = useState({
    open: false,
    message: "",
  });

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <UserContext.Provider value={{ user, setUser }}>
        <SnackbarContext.Provider value={{ snackbarState, setSnackbarState }}>
          <AppRouter />
          <Snackbar
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            open={snackbarState.open}
            message={snackbarState.message}
            autoHideDuration={3000}
            onClose={() => setSnackbarState({ ...snackbarState, open: false })}
          />
        </SnackbarContext.Provider>
      </UserContext.Provider>
    </MuiPickersUtilsProvider>
  );
}

export default App;
