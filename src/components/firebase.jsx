import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyCUPJpqVPx2g2MnQUshxa-UHYWe7b8Aao4",
  authDomain: "billy-kodtest.firebaseapp.com",
  projectId: "billy-kodtest",
  storageBucket: "billy-kodtest.appspot.com",
  messagingSenderId: "642807497075",
  appId: "1:642807497075:web:f8b6fbd5e6941f54598506"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);