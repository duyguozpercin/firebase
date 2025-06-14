
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBEWiMm7cWevCaS9kGeYFAW7QPehIu6IrE",
  authDomain: "fir-51810.firebaseapp.com",
  projectId: "fir-51810",
  storageBucket: "fir-51810.firebasestorage.app",
  messagingSenderId: "132504065607",
  appId: "1:132504065607:web:ebf325d0cb88e74ed88362",
  measurementId: "G-BXEYVFMVGY"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);