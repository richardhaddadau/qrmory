import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { app } from "./Firebase.js";

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const SignMeUp = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
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
      alert(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};

const CheckIfLoggedIn = () => {
  let result = null;
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in.
      console.log(user);
    } else {
      // No user is signed in.
      console.log("No user is signed in.");
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
