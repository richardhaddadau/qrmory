import { db } from "Firebase";
import { serverTimestamp } from "firebase/firestore";

// Get all codes
const ListCodes = async (userId) => {
  const foundCodes = {};

  const codesRef = db.collection("qrCodes");
  const querySnapshot = await codesRef.where("author", "==", userId).get();

  if (querySnapshot.empty) {
    return [];
  }

  querySnapshot.forEach((doc) => {
    foundCodes[doc.id] = doc.data();
  });

  return foundCodes;
};

const GetCode = async (ref) => {
  const codesRef = db.collection("qrCodes").doc(ref);
  const doc = await codesRef.get();

  if (doc.exists) {
    return doc.data();
  } else {
    console.log("No such document!");
    return false;
  }
};

const AddCode = async (userID, shortCode, longUrl) => {
  await db
    .collection("qrCodes")
    .add({
      author: userID,
      shortCode,
      longUrl,
      deleted: false,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    })
    .then(() => {
      return 200;
    })
    .catch((e) => {
      return e;
    });
};

const UpdateCode = async (shortCode, longUrl) => {
  const codeRef = db.collection("qrCodes").doc(shortCode);
  const res = await codeRef.update({ longUrl, updatedAt: serverTimestamp() });
};

export { ListCodes, GetCode, AddCode, UpdateCode };
