import PropTypes from "prop-types";
import { useState } from "react";

import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";

import { BillsListItem } from "components/Bills/Item";
import { PayDialog } from "components/PayDialog";
import { useListStyles } from "./useListStyles";

const initialDialogState = {
  open: false,
  bill: {},
};

/**
 *
 * @param {Object} props
 * @param {array} props.bills
 * @returns
 */
export const BillsList = ({ bills, handleBillChange }) => {
  const classes = useListStyles();

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
      {bills.length ? (
        <List className={classes.root}>
          {bills.map((bill) => (
            <BillsListItem
              key={bill.uid}
              bill={bill}
              onItemClick={onItemClick}
            />
          ))}
        </List>
      ) : (
        <Typography className={classes.noDataText}>
          There are no items to display, try adding one using the button below
          :D
        </Typography>
      )}

      <PayDialog open={open} bill={bill} onClose={onDialogClose} />
    </>
  );
};

BillsList.propTypes = {
  bills: PropTypes.array.isRequired,
};
