import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FilterListIcon from "@material-ui/icons/FilterList";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import Select from "@material-ui/core/Select";
import Typography from "@material-ui/core/Typography";

import { all, unpaid, paid } from "constants/paidTypes";
import { MONTHS } from "constants/months";

import { useBillsFiltersStyles } from "./useBillsFiltersStyles";

export const BillsFilters = ({
  selectedMonth,
  selectedPaidType,
  selectedYear,
  setSelectedMonth,
  setSelectedPaidType,
  setSelectedYear,
}) => {
  const classes = useBillsFiltersStyles();

  const getYearsList = () => {
    const yearsList = [];
    const earliestYear = 1970;
    let currentYear = new Date().getFullYear();

    while (currentYear >= earliestYear) {
      yearsList.push(currentYear);
      currentYear -= 1;
    }

    return yearsList;
  };

  const handleChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const handlePaidType = (e) => {
    setSelectedPaidType(e.target.value);
  };

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <div className={classes.accordionHeader}>
          <FilterListIcon />
          <Typography className={classes.heading}>Filters</Typography>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <div className={classes.filtersContainer}>
          <FormControl className={classes.formControl}>
            <InputLabel id="months-select-label">Month</InputLabel>
            <Select
              labelId="months-select-label"
              id="months-select"
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

          <FormControl className={classes.formControl}>
            <InputLabel id="years-select-label">Year</InputLabel>
            <Select
              labelId="years-select-label"
              id="years-select"
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
            >
              {getYearsList().map((year) => (
                <MenuItem key={year} value={year}>
                  {year}
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
      </AccordionDetails>
    </Accordion>
  );
};
