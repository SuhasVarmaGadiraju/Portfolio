// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

// Init Firebase
const hasFirebaseConfig = Boolean(
  firebaseConfig.apiKey &&
    firebaseConfig.authDomain &&
    firebaseConfig.projectId &&
    firebaseConfig.appId
);

const app = hasFirebaseConfig ? initializeApp(firebaseConfig) : null;

// Auth
export const auth = app ? getAuth(app) : null;
const provider = new GoogleAuthProvider();
export const loginWithGoogle = () => {
  if (!auth) return Promise.reject(new Error("Firebase is not configured"));
  return signInWithPopup(auth, provider);
};
export const logout = () => {
  if (!auth) return Promise.resolve();
  return signOut(auth);
};

// Firestore
export const db = app ? getFirestore(app) : null;
