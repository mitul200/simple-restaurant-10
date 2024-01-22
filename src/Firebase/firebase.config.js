// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpH_ijR_R5KCNlS8ApMw1vUJ3DgN_H-Uk",
  authDomain: "simple-restaurant-a1e94.firebaseapp.com",
  projectId: "simple-restaurant-a1e94",
  storageBucket: "simple-restaurant-a1e94.appspot.com",
  messagingSenderId: "692900191103",
  appId: "1:692900191103:web:317048c1f10c067359584a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app