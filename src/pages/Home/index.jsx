import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles, Fab } from "@material-ui/core";
import { Add } from "@material-ui/icons";

import { getBills } from "services/billService";
import { UserContext } from "context/UserContext";
import { BillsList } from "components/Bills/List";
import { BillsListLoader } from "components/Bills/List/BillsListLoader";

const useStyles = makeStyles((theme) => ({
  homeContainer: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  listContainer: {
    flex: 1,
    overflow: "auto",
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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getBills(user.uid).then((bills) => {
      setUnpaidBills(bills);
      setIsLoading(false);
    });
  }, [user.uid]);

  return (
    <div className={classes.homeContainer}>
      <h1>Home</h1>
      <div className={classes.listContainer}>
        {isLoading ? <BillsListLoader /> : <BillsList bills={unpaidBills} />}
      </div>
      <div className={classes.addButtonContainer}>
        <Link to="/bill" className={classes.addButton}>
          <Fab color="primary" aria-label="add">
            <Add />
          </Fab>
        </Link>
      </div>
    </div>
  );
};
