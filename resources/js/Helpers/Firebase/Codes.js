import {
  collection,
  getDocs,
  setDoc,
  doc,
  getDoc,
  getDocs,
  query,
  where,
  getFirestore,
} from "firebase/firestore/lite";
import { db } from "Firebase";

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

const AddCode = async (userID, shortCode, longUrl) => {
  await db
    .collection("qrCodes")
    .add({
      author: userID,
      shortCode,
      longUrl,
    })
    .then(() => {
      return 200;
    })
    .catch((e) => {
      return e;
    });
};

const GetDoc = async (ref) => {
  const codesRef = db.collection("qrCodes").doc(ref);
  const doc = await codesRef.get();

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log("No such document!");
  }
};

const GetDocs = async (filter, kind) => {
  const q = query(collection(db, "qrCodes"), where(filter, "==", kind));
  const querySnapshot = await getDocs(q);

  const docArray = [];

  querySnapshot.forEach((doc) => {
    docArray.push(doc.data());
  });
};

export { ListCodes, AddCode, GetDoc, GetDocs };
