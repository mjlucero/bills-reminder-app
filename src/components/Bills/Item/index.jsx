import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";

import { ItemIcon } from "components/Bills/Item/Icon";

const useStyles = makeStyles(() => ({
  inline: {
    display: "inline",
  },
}));

/**
 *
 * @param {Object} props
 * @param {Object} props.bill
 * @param {string} props.bill.uid
 * @param {string} props.bill.amount
 * @param {string} props.bill.category
 * @param {Date} props.bill.expirationDate
 * @param {string} props.bill.name
 * @param {boolean} props.bill.paid
 *
 */
export const BillsListItem = ({ bill }) => {
  const classes = useStyles();

  /**
   *
   * @param {Date} date
   * @returns
   */
  const getFormatedDate = (date) => {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  return (
    <ListItem button key={bill.uid}>
      <ListItemIcon>
        <ItemIcon category={bill.category} />
      </ListItemIcon>
      <ListItemText
        primary={bill.name}
        secondary={
          <>
            <Typography
              sx={{ display: "inline" }}
              component="span"
              variant="body2"
              className={classes.inline}
              color="textPrimary"
            >
              {getFormatedDate(bill.expirationDate)}
            </Typography>
            {` - $${bill.amount}`}
          </>
        }
      />
    </ListItem>
  );
};
