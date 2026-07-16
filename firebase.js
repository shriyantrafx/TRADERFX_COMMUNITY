import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {

PASTE YOUR FIREBASE CONFIG HERE// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASyQefLiSnF3vooHpQ1fzzPLBI229CASM",
  authDomain: "tradersfx-community.firebaseapp.com",
  projectId: "tradersfx-community",
  storageBucket: "tradersfx-community.firebasestorage.app",
  messagingSenderId: "166627997744",
  appId: "1:166627997744:web:7b6bcdc4296598a37655f5",
  measurementId: "G-6SL8BEQZRM"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
