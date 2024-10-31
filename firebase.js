import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD6QwUBc_wzJ8C_pT9xV8FrGRrj9Wz52QE",
  authDomain: "signal-2df73.firebaseapp.com",
  projectId: "signal-2df73",
  storageBucket: "signal-2df73.appspot.com",
  messagingSenderId: "775164027600",
  appId: "1:775164027600:web:4b2f41523f2a3a750374d5"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
