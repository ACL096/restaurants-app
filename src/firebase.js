import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDScxmczzSLuCTFoydi3ZyZR6CbPV7BKKo",
  authDomain: "restaurants-app-e1b12.firebaseapp.com",
  projectId: "restaurants-app-e1b12",
  storageBucket: "restaurants-app-e1b12.firebasestorage.app",
  messagingSenderId: "943110341462",
  appId: "1:943110341462:web:cee4a9525b93d464e80cf7"

};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;