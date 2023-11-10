import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBd3M7KP2pBGlVvio9fUdPk0RknpKVoqmo",
  authDomain: "muebleriadp.firebaseapp.com",
  projectId: "muebleriadp",
  storageBucket: "muebleriadp.appspot.com",
  messagingSenderId: "512155028302",
  appId: "1:512155028302:web:f4b12590c0f6f26024ec1f",
  measurementId: "G-L9B7HWQD67",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);

const auth = getAuth(app);
