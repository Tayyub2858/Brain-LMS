import { getFirestore } from '@firebase/firestore/lite'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDfiIZeAGr_Ajfzk89Zwo1W5iGpcU5BGxc",
  authDomain: "brainanalytic-3eb48.firebaseapp.com",
  projectId: "brainanalytic-3eb48",
  storageBucket: "brainanalytic-3eb48.appspot.com",
  messagingSenderId: "547288106859",
  appId: "1:547288106859:web:1a90ad1e35c7aa38562e2e",
  measurementId: "G-PKB3R2L72Q"
};
  
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app)
  
  export {app , db};
