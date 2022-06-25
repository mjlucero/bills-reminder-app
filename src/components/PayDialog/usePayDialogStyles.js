import { makeStyles } from "@material-ui/core";

export const usePayDialogStyles = makeStyles(() => ({
  inputContainer: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
  input: {
    display: "none",
  },
  backdrop: {
    zIndex: 1301,
    color: "#fff",
  },
}));
