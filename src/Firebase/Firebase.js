// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCuzegDNdmGyg72UHRHLTES9pn0A3Lss50",
    authDomain: "react-dragon-news-auth-fe722.firebaseapp.com",
    projectId: "react-dragon-news-auth-fe722",
    storageBucket: "react-dragon-news-auth-fe722.appspot.com",
    messagingSenderId: "127349673382",
    appId: "1:127349673382:web:110d8732108446fb035367"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;