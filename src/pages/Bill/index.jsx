import React, { useState } from "react";

import { Button, TextField, Grid, Paper, makeStyles } from "@material-ui/core";
import { KeyboardDatePicker } from "@material-ui/pickers";

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

  const [selectedDate, handleDateChange] = useState(new Date());
  return (
      <form autoComplete="off">
        <Paper className={classes.paper}>
          <h1>Bill</h1>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} alignItems="center">
              <TextField className={classes.input} id="Name" label="Name" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6} alignItems="center">
              <KeyboardDatePicker
                fullWidth
                disableToolbar
                variant="inline"
                format="do LLL"
                margin="normal"
                id="date-picker-inline"
                label="Expiration Date"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                className={classes.button}
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
  );
};
