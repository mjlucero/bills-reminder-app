import { makeStyles } from "@material-ui/core";

export const useBillStyles = makeStyles((theme) => ({
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
  selectContainer: {
    marginTop: "24px !important",
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
