import { initializeApp } from "firebase/app";

const firebaseConfig = JSON.parse(import.meta.env.VITE_FIREBASE_CONFIG_JSON);

export const app = initializeApp(firebaseConfig);
