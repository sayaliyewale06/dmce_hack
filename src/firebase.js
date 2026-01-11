import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyANkMD6_Or2yUvdr-GqS64GK0lRr8kEVMg",
    authDomain: "dmcehackathon-4dac4.firebaseapp.com",
    projectId: "dmcehackathon-4dac4",
    storageBucket: "dmcehackathon-4dac4.firebasestorage.app",
    messagingSenderId: "475883073306",
    appId: "1:475883073306:web:18650eb6d9ac08abae06a3",
    measurementId: "G-5KKRMN8RZT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, googleProvider, db };
