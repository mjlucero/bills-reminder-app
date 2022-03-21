import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles, Fab } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import CircularProgress from "@material-ui/core/CircularProgress";

import { getBills } from "services/billService";
import { UserContext } from "context/UserContext";
import { BillsList } from "components/Bills/List";

const useStyles = makeStyles((theme) => ({
  homeContainer: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  listContainer: {
    backgroundColor: theme.palette.background.paper,
    flex: 1,
    overflow: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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

  const [unpaidBills, setUnpaidBills] = useState({
    isLoading: true,
    bills: [],
  });

  useEffect(() => {
    getBills(user.uid).then((bills) => {
      setUnpaidBills({
        isLoading: false,
        bills,
      });
    });
  }, [user.uid]);

  const handleBillChange = (bill) => {
    if (bill.paid) {
      const filteredBills = unpaidBills.bills.filter((b) => b.uid !== bill.uid);
      setUnpaidBills({ ...unpaidBills, bills: filteredBills });
    }
  };

  const { isLoading, bills } = unpaidBills;

  return (
    <div className={classes.homeContainer}>
      <h1>Home</h1>
      <div className={classes.listContainer}>
        {isLoading ? (
          <CircularProgress size="100px" />
        ) : (
          <BillsList bills={bills} handleBillChange={handleBillChange} />
        )}
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
