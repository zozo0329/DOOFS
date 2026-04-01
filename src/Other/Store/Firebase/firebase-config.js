import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBsuNKLUZvmFouTx3JKxVn8rjCj8cE5IJM",
  authDomain: "data-2000-42ec8.firebaseapp.com",
  projectId: "data-2000-42ec8",
  storageBucket: "data-2000-42ec8.firebasestorage.app",
  messagingSenderId: "949755251909",
  appId: "1:949755251909:web:1e9417097b4fdfb08634ac",
  measurementId: "G-Q7SZC48GPG",
  databaseURL:
    "https://data-2000-42ec8-default-rtdb.asia-southeast1.firebasedatabase.app",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getDatabase(app);
export default app;
