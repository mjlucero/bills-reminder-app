import { makeStyles } from "@material-ui/core";

export const useListStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    height: "100%",
    width: "100%",
  },
  noDataText: {
    textAlign: "center",
    padding: "0 8px",
  },
}));
