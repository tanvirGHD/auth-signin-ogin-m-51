// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCe99k-AzLtRTr0ZfMZGqabNyAf72_DXjo",
  authDomain: "auth-react-project-f2afc.firebaseapp.com",
  projectId: "auth-react-project-f2afc",
  storageBucket: "auth-react-project-f2afc.firebasestorage.app",
  messagingSenderId: "65551451327",
  appId: "1:65551451327:web:4b0cd8fc8006c6353db20a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
