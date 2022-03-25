import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  filtersContainer: {
    alignItems: "center",
    display: "flex",
    flexWrap: "wrap",
    gap: "24px",
    width: "100%",
  },
  formControl: {
    minWidth: 120,
  },
  totalText: {
    flex: 1,
    minWidth: 120,
    textAlign: "right",
  },
  accordionHeader: {
    alignItems: "center",
    display: "flex",
    gap: "8px",
  },
}));
