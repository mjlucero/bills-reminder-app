import { db, addDoc, collection } from "firebase-config/firestore-config";

/**
 *
 * @param {Object} billData
 * @param {string} billData.userId
 * @param {string} billData.title
 * @param {string} billData.category
 * @param {Date} billData.expirationDate
 */
export const saveBill = async (billData) => {
  const newBill = { ...billData };

  try {
    const docRef = await addDoc(collection(db, billData.userId), {
      ...newBill,
    });
    console.log("docRef: ", docRef);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
