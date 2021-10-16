import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";

import { BillsListItem } from "components/Bills/Item";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
}));

export const BillsList = ({ bills }) => {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {bills.map((bill) => (
        <BillsListItem key={bill.uid} bill={bill} />
      ))}
    </List>
  );
};

BillsList.propTypes = {
  bills: PropTypes.array.isRequired,
};
