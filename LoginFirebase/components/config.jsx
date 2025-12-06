import { initializeApp } from "firebase/app";
import { getAnalytics, getDatabase } from "firebase/database";

// configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBiF3iAC2DjY52-8vqgSqngFW75EjxjVlc",
    authDomain: "practicafb-92aa4.firebaseapp.com",
    databaseURL: "https://practicafb-92aa4-default-rtdb.firebaseio.com",
    projectId: "practicafb-92aa4",
    storageBucket: "practicafb-92aa4.firebasestorage.app",
    messagingSenderId: "268521207044",
    appId: "1:268521207044:web:dce000f21ce3e29d694c51",
    measurementId: "G-3ZZDHSHF8R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//se inicializa la base de datos
export const db = getDatabase(app);
