import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
apiKey: "AIzaSyBmFdMmMKLOc_DNbT2cgMwc9_GhGIjwVsk",
dbAuthDomain: "cusaathi-frontend.firebaseapp.com",
projectId: "cusaathi-frontend",
storageBucket: "cusaathi-frontend.firebasestorage.app",
messagingSenderId: "780693552594",
appId: "1:780693552594:web:fb86c6ab4520cd9de7dc0b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
