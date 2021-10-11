import { getFirestore } from "firebase/firestore";
import { firebaseApp } from "firebase-config/app-config";

const db = getFirestore(firebaseApp);

export { db };

// async function getCities(db) {
//   const citiesCol = collection(db, "cities");
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map((doc) => doc.data());
//   return cityList;
// }
