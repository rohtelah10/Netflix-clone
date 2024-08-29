import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCB4On7egTRN8d6fVc02rumG6PseGSGtCo",
  authDomain: "react-netflix-clone-30182.firebaseapp.com",
  projectId: "react-netflix-clone-30182",
  storageBucket: "react-netflix-clone-30182.appspot.com",
  messagingSenderId: "244879836007",
  appId: "1:244879836007:web:2a3648825062cff2f725c2",
  measurementId: "G-3DC3ED73SK"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
