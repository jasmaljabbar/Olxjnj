import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB3no2wrenhk32z3093an38RVUTu64O3HE",
  authDomain: "olxcl-efc82.firebaseapp.com",
  projectId: "olxcl-efc82",
  storageBucket: "olxcl-efc82.appspot.com",
  messagingSenderId: "388821773725",
  appId: "1:388821773725:web:392009ed3e17116fd35374"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
