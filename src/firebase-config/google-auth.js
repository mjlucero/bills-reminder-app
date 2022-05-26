import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "firebase-config/app-config";

const provider = new GoogleAuthProvider();

export const googleSignInWithPopup = () => signInWithPopup(auth, provider);
