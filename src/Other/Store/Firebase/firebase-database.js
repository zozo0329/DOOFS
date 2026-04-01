import { ref, set } from "firebase/database";
import { database } from "./firebase-config";

// Save user data to Realtime Database
export const saveUserToDatabase = async (user) => {
  try {
    console.log("Attempting to save user to database...");
    console.log("User UID:", user.uid);
    console.log("Database ref path:", `users/${user.uid}`);

    const userRef = ref(database, `users/${user.uid}`);
    const userData = {
      email: user.email,
      uid: user.uid,
      isAnonymous: user.isAnonymous,
      createdAt: user.metadata.creationTime,
      lastSignInTime: user.metadata.lastSignInTime,
    };

    console.log("User data to save:", userData);
    await set(userRef, userData);

    // if (!result.ok) {
    //   console.log("Error! Response:", result);
    // }

    console.log("User saved to database successfully!");
    return { success: true, error: null };
  } catch (error) {
    console.error("Error saving user to database:", error);
    return { success: false, error: error.message };
  }
};
