// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWZa-Vdmu_D_95Ayx48s-s2CvYu_NmOtI",
  authDomain: "codernext-detailing.firebaseapp.com",
  projectId: "codernext-detailing",
  storageBucket: "codernext-detailing.appspot.com",
  messagingSenderId: "308139391855",
  appId: "1:308139391855:web:5a31153cf5f142e39a469a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
