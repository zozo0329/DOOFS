import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBsuNKLUZvmFouTx3JKxVn8rjCj8cE5IJM",
  authDomain: "data-2000-42ec8.firebaseapp.com",
  projectId: "data-2000-42ec8",
  storageBucket: "data-2000-42ec8.firebasestorage.app",
  messagingSenderId: "949755251909",
  appId: "1:949755251909:web:1e9417097b4fdfb08634ac",
  measurementId: "G-Q7SZC48GPG",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
