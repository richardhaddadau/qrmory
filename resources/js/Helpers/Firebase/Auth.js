import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendEmailVerification,
} from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { app, db } from "./Firebase.js";

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const SignMeUp = (email, password, name) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      // Signed in
      const user = userCredential.user;

      // Send Email Verification
      await sendEmailVerification(user);

      const docRef = await addDoc(collection(db, "users"), {
        name: name || "",
        qrCodesQuota: 2, // should be global
        qrCodesUsed: 0,
        subscriptionLevel: 1,
        accountID: user.uid,
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
};

const LogMeIn = (email, password) => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
};

const CheckIfLoggedIn = () => {
  onAuthStateChanged(auth, async (user) => {
    console.log("enter");
    if (user) {
      console.log("found user");
      // Get user data from the Firebase user
      const doc = await db.collection("users").doc(user.uid).get();

      if (doc.exists) {
        console.log("found document");
        const result = doc.data();
        return result;
      } else {
        console.log("No such document!");
      }
    } else {
      return null;
    }
  });
};

const LogMeOut = () => {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
};

export { auth, SignMeUp, LogMeIn, CheckIfLoggedIn, LogMeOut };
