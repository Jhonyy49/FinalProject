import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAL9bWLFOox3ADV8Jryeho2Oaa83ioRvps",
  authDomain: "firecommerce-a8b13.firebaseapp.com",
  projectId: "firecommerce-a8b13",
  storageBucket: "firecommerce-a8b13.appspot.com",
  messagingSenderId: "741653115422",
  appId: "1:741653115422:web:a2b0457a2eefe39490f40f",
  measurementId: "G-L7CBST2ZZF",
};

const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);

export default fireDB;
