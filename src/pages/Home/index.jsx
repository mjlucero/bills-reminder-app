import React from "react";
import { makeStyles, Fab } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { Header } from "components/Header";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    boxSizing: "border-box",
    flexDirection: "column",
    height: "100%",
  },
}));

export const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <main>
        <h1>Home</h1>
        <Link to="/bill">
          <Fab color="primary" aria-label="add">
            <Add />
          </Fab>
        </Link>
      </main>
    </div>
  );
};
