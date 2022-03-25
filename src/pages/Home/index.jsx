import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Add from "@material-ui/icons/Add";
import CircularProgress from "@material-ui/core/CircularProgress";
import Fab from "@material-ui/core/Fab";
import Typography from "@material-ui/core/Typography";

import { getBills } from "services/billService";
import { UserContext } from "context/UserContext";
import { BillsList } from "components/Bills/List";
import { BillsFilters } from "components/Bills/Filters";
import { unpaid } from "constants/paidTypes";

import { useStyles } from "./styles";

export const Home = () => {
  const today = new Date();

  const classes = useStyles();

  const { user } = useContext(UserContext);

  const [loading, setLoading] = useState(true);

  const [bills, setBills] = useState([]);

  const [total, setTotal] = useState(0);

  const [selectedMonth, setSelectedMonth] = useState(today.getMonth());

  const [selectedYear, setSelectedYear] = useState(today.getFullYear());

  const [selectedPaidType, setSelectedPaidType] = useState(unpaid);

  useEffect(() => {
    setLoading(true);

    getBills(user.uid, selectedMonth, selectedYear, selectedPaidType).then(
      (bills) => {
        setBills(bills);
        setBillsTotal(bills);
        setLoading(false);
      }
    );
  }, [user.uid, selectedMonth, selectedYear, selectedPaidType]);

  const handleBillChange = (bill) => {
    if (bill.paid) {
      const filteredBills = bills.filter((b) => b.uid !== bill.uid);
      setBills(filteredBills);
    }
  };

  const setBillsTotal = (bills) => {
    const total = bills.reduce(
      (prev, curr) => prev + parseFloat(curr.amount),
      0
    );

    setTotal(total.toFixed(2));
  };

  return (
    <div className={classes.homeContainer}>
      <h1>Home</h1>
      <BillsFilters
        selectedMonth={selectedMonth}
        selectedPaidType={selectedPaidType}
        selectedYear={selectedYear}
        setSelectedMonth={setSelectedMonth}
        setSelectedPaidType={setSelectedPaidType}
        setSelectedYear={setSelectedYear}
      />

      <Typography className={classes.totalText} variant="h6" component="h2">
        Total ${total}
      </Typography>

      <div className={classes.listContainer}>
        {loading ? (
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
