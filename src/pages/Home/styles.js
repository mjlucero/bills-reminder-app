import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  homeContainer: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  listContainer: {
    backgroundColor: theme.palette.background.paper,
    flex: 1,
    overflow: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  addButtonContainer: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: theme.spacing(2),
    width: "100%",
  },
  addButton: {
    height: "56px",
    width: "56px",
  },
  totalText: {
    textAlign: "right",
    margin: "16px 0",
  },
}));
