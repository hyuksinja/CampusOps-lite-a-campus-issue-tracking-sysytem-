import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBifhNtLTkkldkKGvazmBnTrNxHOlFi7C0",
  authDomain: "campusops-lite.firebaseapp.com",
  projectId: "campusops-lite",
  storageBucket: "campusops-lite.firebasestorage.app",
  messagingSenderId: "636004711563",
  appId: "1:636004711563:web:dd1d95b23f600240a0e88e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
