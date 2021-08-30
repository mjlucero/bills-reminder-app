import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "firebase-config/app-config";

const createEmailUser = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

const signEmailUser = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export { createEmailUser, signEmailUser };
