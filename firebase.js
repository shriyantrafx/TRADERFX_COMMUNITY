import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyASyQefLiSnF3vooHpQ1fzzPLBI229CASM",
  authDomain: "tradersfx-community.firebaseapp.com",
  projectId: "tradersfx-community",
  storageBucket: "tradersfx-community.firebasestorage.app",
  messagingSenderId: "166627997744",
  appId: "1:166627997744:web:7b6bcdc4296598a37655f5",
  measurementId: "G-6SL8BEQZRM"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
