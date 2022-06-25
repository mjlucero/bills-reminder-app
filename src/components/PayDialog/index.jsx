import { useState } from "react";
import PropTypes from "prop-types";

import Backdrop from "@material-ui/core/Backdrop";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import ReceiptIcon from "@material-ui/icons/Receipt";

import { updateBill } from "services/billService";
import { usePayDialogStyles } from "./usePayDialogStyles";

export const PayDialog = ({ onClose, open, bill }) => {
  const classes = usePayDialogStyles();

  const [showBackdrop, setShowBackdrop] = useState(false);

  const handlePay = () => {
    setShowBackdrop(true);

    updateBill(bill.uid).then(() => {
      setShowBackdrop(false);
      onClose({ ...bill, paid: true });
    });
  };

  const { name } = bill;

  return (
    <>
      <Dialog onClose={onClose} aria-labelledby="Pay dialog" open={open}>
        <DialogTitle id="pay-dialog-title">Pay {name}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You are going to pay this bill, please upload your receipt and press
            'pay' button.
          </DialogContentText>

          <div className={classes.inputContainer}>
            <input
              accept="image/*, application/pdf"
              className={classes.input}
              id="icon-button-file"
              type="file"
            />
            <label htmlFor="icon-button-file">
              <IconButton
                color="primary"
                aria-label="upload receipt"
                component="span"
              >
                <ReceiptIcon />
              </IconButton>
            </label>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handlePay} color="primary">
            Pay
          </Button>
        </DialogActions>
      </Dialog>
      <Backdrop className={classes.backdrop} open={showBackdrop}>
        <CircularProgress color="primary" />
      </Backdrop>
    </>
  );
};

PayDialog.propTypes = {
  bill: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
