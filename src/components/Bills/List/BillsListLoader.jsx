import { makeStyles } from "@material-ui/core";
import ContentLoader from "react-content-loader";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  loaderContainer: {
    alignItems: "center",
    display: "flex",
    height: "100%",
    justifyContent: "center",
    padding: "16px",
    width: "100%",
  },
}));

export const BillsListLoader = () => {
  const classes = useStyles();

  return (
    <Paper elevation={0} className={classes.loaderContainer}>
      <ContentLoader
        speed={2}
        width={300}
        height={350}
        viewBox="0 0 300 350"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <circle cx="25" cy="29" r="17" />
        <rect x="65" y="4" rx="8" ry="8" width="200" height="18" />
        <rect x="65" y="37" rx="8" ry="8" width="100" height="16" />
        <circle cx="25" cy="110" r="17" />
        <rect x="65" y="86" rx="8" ry="8" width="100" height="18" />
        <rect x="65" y="119" rx="8" ry="8" width="180" height="16" />
        <circle cx="25" cy="191" r="17" />
        <rect x="65" y="167" rx="8" ry="8" width="150" height="18" />
        <rect x="65" y="200" rx="8" ry="8" width="65" height="16" />
        <circle cx="25" cy="272" r="17" />
        <rect x="65" y="247" rx="8" ry="8" width="165" height="18" />
        <rect x="65" y="280" rx="8" ry="8" width="75" height="16" />
        <circle cx="25" cy="353" r="17" />
        <rect x="65" y="327" rx="8" ry="8" width="140" height="18" />
      </ContentLoader>
    </Paper>
  );
};
