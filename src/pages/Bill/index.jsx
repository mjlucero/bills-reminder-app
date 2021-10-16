import { useContext, useState } from "react";

import { KeyboardDatePicker } from "@material-ui/pickers";
import { makeStyles } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";

import { ActionButton } from "components/ActionButton";
import { CATEGORIES_MAPPER } from "config";
import { ItemIcon } from "components/Bills/Item/Icon";
import { saveBill } from "services/billService";
import { SnackbarContext } from "context/SnackbarContext";
import { useForm } from "hooks/useForm";
import { UserContext } from "context/UserContext";

const useStyles = makeStyles((theme) => ({
  billFormContainer: {
    alignItems: "center",
    display: "flex",
    height: "100%",
    justifyContent: "center",
  },
  button: {
    marginTop: theme.spacing(2),
  },
  formControl: {
    width: "100%",
  },
  input: {
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(2),
  },
  select: {
    alignItems: "center",
    display: "flex",
    gap: "4px",
  },
  paper: {
    padding: theme.spacing(2),
  },
}));

export const Bill = () => {
  const classes = useStyles();

  const { user } = useContext(UserContext);
  const { setSnackbarState } = useContext(SnackbarContext);

  const [saveBtnLoading, setSaveBtnLoading] = useState(false);

  const {
    formData: billForm,
    handleInputChange,
    reset,
  } = useForm({
    name: "",
    category: "",
    expirationDate: new Date(),
    amount: 0,
  });

  const { name, category, expirationDate, amount } = billForm;

  /**
   *
   * @param {Date} date
   */
  const handleDateChange = (date) => {
    handleInputChange({
      target: {
        name: "expirationDate",
        value: date,
      },
    });
  };

  /**
   *
   * @param {FormDataEvent} e
   */
  const handleSave = async (e) => {
    e.preventDefault();

    setSaveBtnLoading(true);

    await saveBill({
      userId: user.uid,
      name,
      category,
      expirationDate,
      amount,
    });

    reset();

    setSaveBtnLoading(false);

    setSnackbarState({ open: true, message: `${name} created` });
  };

  return (
    <div className={classes.billFormContainer}>
      <form autoComplete="off" onSubmit={handleSave}>
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
                required
              />
            </Grid>
            <Grid container item xs={12} sm={6} alignItems="center">
              <FormControl required className={classes.formControl}>
                <InputLabel id="category">Category</InputLabel>
                <Select
                  labelId="category"
                  id="category-select"
                  name="category"
                  value={category}
                  onChange={handleInputChange}
                  renderValue={(value) => (
                    <div className={classes.select}>
                      <ItemIcon category={value} fontSize="small" />
                      {CATEGORIES_MAPPER[value].displayName}{" "}
                    </div>
                  )}
                >
                  {Object.keys(CATEGORIES_MAPPER).map((key, index) => (
                    <MenuItem value={key} key={index}>
                      {CATEGORIES_MAPPER[key].displayName}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
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
              <ActionButton
                type="submit"
                className={classes.button}
                variant="contained"
                color="primary"
                fullWidth
                isLoading={saveBtnLoading}
                disabled={saveBtnLoading}
              >
                Save
              </ActionButton>
            </Grid>
          </Grid>
        </Paper>
      </form>
    </div>
  );
};
