import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB1CbJBHm_gTABXr2wVEyxxPeUjRuGAj8U",
    authDomain: "kobi-blogs-app.firebaseapp.com",
    projectId: "kobi-blogs-app",
    storageBucket: "kobi-blogs-app.appspot.com",
    messagingSenderId: "817354330221",
    appId: "1:817354330221:web:28660fd3a772e58b5def64",
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export { firebaseApp, auth, db };
