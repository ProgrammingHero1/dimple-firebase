// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCt7qNd2A4vEoBNgqNfYgZLcPrARPR3pBk",
  authDomain: "dimple-firebase-6888a.firebaseapp.com",
  projectId: "dimple-firebase-6888a",
  storageBucket: "dimple-firebase-6888a.firebasestorage.app",
  messagingSenderId: "242853559054",
  appId: "1:242853559054:web:9aac0c0005eebf6898b55f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
