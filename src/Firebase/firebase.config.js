import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAPF5imm1OuELw-erHi2uH1qzNwIRus1j4",
  authDomain: "auth-again-fundamental.firebaseapp.com",
  projectId: "auth-again-fundamental",
  storageBucket: "auth-again-fundamental.firebasestorage.app",
  messagingSenderId: "659607928523",
  appId: "1:659607928523:web:7ef23c3429fb3d10da654e"
};
 export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);