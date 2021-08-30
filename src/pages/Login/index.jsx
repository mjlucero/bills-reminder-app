import React from "react";
import { Button, Icon } from "@material-ui/core";
import { googleSignInWithPopup } from "firebase-config/google-auth";

export const Login = () => {
  const handleGoogleLogin = async () => {
    const { user } = await googleSignInWithPopup();

    console.log(`user`, user);
  };

  return (
    <>
      <h1>Login</h1>
      <hr />
      <Button
        color="primary"
        variant="outlined"
        startIcon={<Icon className="fab fa-google" />}
        fullWidth
        onClick={handleGoogleLogin}
      >
        Sign in with google
      </Button>
    </>
  );
};
