import { makeStyles } from "@material-ui/core/styles";

import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import Select from "@material-ui/core/Select";

import { all, unpaid, paid } from "constants/paidTypes";
import { MONTHS } from "constants/months";

const useStyles = makeStyles((theme) => ({
  filtersContainer: {
    alignItems: "center",
    display: "flex",
    flexWrap: "wrap",
    gap: "24px",
    padding: "24px 0",
    width: "100%",
  },
  formControl: {
    minWidth: 120,
  },
  totalText: {
    flex: 1,
    textAlign: "right",
    minWidth: 120,
  },
}));

export const BillsFilters = ({
  selectedMonth,
  setSelectedMonth,
  selectedPaidType,
  setSelectedPaidType,
}) => {
  const classes = useStyles();

  const handleChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const handlePaidType = (e) => {
    setSelectedPaidType(e.target.value);
  };

  return (
    <div className={classes.filtersContainer}>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Month</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedMonth}
          onChange={handleChange}
        >
          {MONTHS.map((month, number) => (
            <MenuItem key={month} value={number}>
              {month}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl component="fieldset">
        <RadioGroup
          aria-label="paidType"
          name="paidType"
          value={selectedPaidType}
          onChange={handlePaidType}
          row
        >
          <FormControlLabel
            value={all}
            control={<Radio color="primary" />}
            label="All"
          />
          <FormControlLabel
            value={paid}
            control={<Radio color="primary" />}
            label="Paid"
          />
          <FormControlLabel
            value={unpaid}
            control={<Radio color="primary" />}
            label="Unpaid"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};
