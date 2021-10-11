import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles, Fab } from "@material-ui/core";
import { Add } from "@material-ui/icons";

import { getBills } from "services/billService";
import { UserContext } from "context/UserContext";
import { BillsList } from "components/Bills/List";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    boxSizing: "border-box",
    flexDirection: "column",
    height: "100%",
  },
  addButtonContainer: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: theme.spacing(2),
    width: "100%",
  },
  addButton: {
    height: "56px",
    width: "56px",
  },
}));

export const Home = () => {
  const classes = useStyles();

  const { user } = useContext(UserContext);

  const [unpaidBills, setUnpaidBills] = useState([]);

  useEffect(() => {
    getBills(user.uid).then((bills) => {
      setUnpaidBills(bills);
    });
  }, [user.uid]);

  return (
    <div className={classes.root}>
      <main>
        <h1>Home</h1>
        <BillsList bills={unpaidBills} />
        <div className={classes.addButtonContainer}>
          <Link to="/bill" className={classes.addButton}>
            <Fab color="primary" aria-label="add">
              <Add />
            </Fab>
          </Link>
        </div>
      </main>
    </div>
  );
};
