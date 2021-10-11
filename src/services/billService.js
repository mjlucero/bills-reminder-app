import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { db } from "firebase-config/firestore-config";

/**
 *
 * @param {Object} billData
 * @param {string} billData.userId
 * @param {string} billData.title
 * @param {string} billData.category
 * @param {Date} billData.expirationDate
 */
export const saveBill = async (billData) => {
  const newBill = { ...billData, paid: false };

  try {
    const docRef = await addDoc(collection(db, billData.userId), {
      ...newBill,
    });
    console.log("docRef: ", docRef);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

/**
 * @param {string} userId
 */
export const getBills = async (userId) => {
  const q = query(collection(db, userId), where("paid", "==", false));

  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map((doc) => {
    const docData = doc.data();

    return {
      uid: doc.id,
      ...docData,
      expirationDate: docData.expirationDate.toDate(),
    };
  });
};
