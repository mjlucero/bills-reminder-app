import {
  addDoc,
  collection,
  getDocs,
  query,
  where,
  orderBy,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "firebase-config/firestore-config";
import { COLLECTION_NAME } from "firebase-config/app-config";

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
    await addDoc(collection(db, COLLECTION_NAME), {
      ...newBill,
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

/**
 * @param {string} userId
 */
export const getBills = async (userId) => {
  const today = new Date();

  const month = today.getMonth();
  const year = today.getFullYear();

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  const q = query(
    collection(db, COLLECTION_NAME),
    where("paid", "==", false),
    where("userId", "==", userId),
    where("expirationDate", ">=", firstDay),
    where("expirationDate", "<=", lastDay),
    orderBy("expirationDate", "asc")
  );

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

/**
 * @param {string} billId
 */
export const updateBill = async (billId) => {
  const billRef = doc(db, COLLECTION_NAME, billId);

  return await updateDoc(billRef, {
    paid: true,
  });
};
