import React, { useContext } from "react";

import { Button, TextField, Grid, Paper, makeStyles } from "@material-ui/core";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { saveBill } from "services/billService";
import { UserContext } from "context/UserContext";
import { useForm } from "hooks/useForm";

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: theme.spacing(2),
  },
  input: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
  paper: {
    padding: theme.spacing(2),
  },
}));

export const Bill = () => {
  const classes = useStyles();

  const { user } = useContext(UserContext);

  const { formData: billForm, handleInputChange, reset } = useForm({
    name: "",
    category: "",
    expirationDate: new Date(),
    amount: 0,
  });

  const { name, category, expirationDate, amount } = billForm;

  const handleDateChange = (date) => {
    handleInputChange({
      target: {
        name: "expirationDate",
        value: date,
      },
    });
  };

  const handleSave = () => {
    saveBill({
      userId: user.uid,
      name,
      category,
      expirationDate,
      amount,
    }).then()


  };

  return (
    <div className="flex-centered-container">
      <form autoComplete="off">
        <Paper className={classes.paper}>
          <h1>Bill</h1>
          <Grid container spacing={2}>
            <Grid container item xs={12} sm={6} alignItems="center">
              <TextField
                className={classes.input}
                fullWidth
                id="name"
                label="Name"
                name="name"
                onChange={handleInputChange}
                value={name}
              />
            </Grid>
            <Grid container item xs={12} sm={6} alignItems="center">
              <TextField
                className={classes.input}
                fullWidth
                id="category"
                label="Category"
                name="category"
                onChange={handleInputChange}
                value={category}
              />
            </Grid>
            <Grid container item xs={12} sm={6} alignItems="center">
              <KeyboardDatePicker
                disableToolbar
                format="do LLL"
                fullWidth
                id="expiration-date"
                label="Expiration Date"
                margin="normal"
                name="expirationDate"
                value={expirationDate}
                variant="inline"
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </Grid>
            <Grid container item xs={12} sm={6} alignItems="center">
              <TextField
                className={classes.input}
                fullWidth
                id="amount"
                label="Amount"
                name="amount"
                onChange={handleInputChange}
                value={amount}
                type="number"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                className={classes.button}
                onClick={handleSave}
                variant="contained"
                color="primary"
                fullWidth
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </form>
    </div>
  );
};
