import { app } from "./Firebase.js";
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

const db = getFirestore(app);

// Get all codes
const ListCodes = async () => {
  const codesCollection = collection(db, "qrCodes");
  const codesDocs = await getDocs(codesCollection);
  const codesList = codesDocs.docs.map((doc) => doc.data());
  return codesList;
};

const AddCode = async (shortCode, longUrl) => {
  const codesRef = doc(db, "qrCodes", shortCode);
  await setDoc(codesRef, {
    shortCode,
    longUrl,
  });
};

const GetDoc = async (ref) => {
  const docRef = doc(db, "qrCodes", ref);
  const docSnap = await getDoc(docRef);

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
