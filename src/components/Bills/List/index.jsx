import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";

import { BillsListItem } from "components/Bills/Item";
import { PayDialog } from "components/PayDialog";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    height: "100%",
  },
}));

const initialDialogState = {
  open: false,
  bill: {},
};

export const BillsList = ({ bills, handleBillChange }) => {
  const classes = useStyles();

  const [dialogState, setDialogState] = useState(initialDialogState);

  const onItemClick = (bill) => {
    setDialogState({
      open: true,
      bill,
    });
  };

  const onDialogClose = (bill) => {
    if (bill) {
      handleBillChange(bill);
    }

    setDialogState({ ...dialogState, open: false });
  };

  const { open, bill } = dialogState;

  return (
    <>
      <List className={classes.root}>
        {bills.map((bill) => (
          <BillsListItem key={bill.uid} bill={bill} onItemClick={onItemClick} />
        ))}
      </List>
      <PayDialog open={open} bill={bill} onClose={onDialogClose} />
    </>
  );
};

BillsList.propTypes = {
  bills: PropTypes.array.isRequired,
};
