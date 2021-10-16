import { getFirestore } from "firebase/firestore";
import { firebaseApp } from "firebase-config/app-config";

const db = getFirestore(firebaseApp);

export { db };
