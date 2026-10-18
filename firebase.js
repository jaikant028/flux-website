import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';  // Import GoogleAuthProvider
import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage'; // Import Firebase Storage

const firebaseConfig = {
  apiKey: "AIzaSyApSkIiAVBYE7MQ_2nGQ8yGoT0qNyZa5zw",
  authDomain: "flux-website-938db.firebaseapp.com",
  projectId: "flux-website-938db",
  storageBucket: "flux-website-938db.appspot.com",
  messagingSenderId: "18310272536",
  appId: "1:18310272536:web:e9126c8b9d343a045cd56d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize GoogleAuthProvider and export it
export const googleProvider = new GoogleAuthProvider();  // Add this line

export const database = getDatabase(app);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Firebase Storage and get a reference to the service
export const storage = getStorage(app);
