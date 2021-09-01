import React from "react";
import { makeStyles } from "@material-ui/core";
import { Header } from "components/Header";

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
      <Header />
      <main>
        <h1>Home</h1>
      </main>
    </div>
  );
};
