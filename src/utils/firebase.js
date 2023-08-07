import {
    initializeApp
} from "firebase/app";

import "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyCQcD0deqdFqF7DlXEqvRGt-TlbpixsVCI",
    authDomain: "fir-auth-1-9e373.firebaseapp.com",
    projectId: "fir-auth-1-9e373",
    storageBucket: "fir-auth-1-9e373.appspot.com",
    messagingSenderId: "119252909129",
    appId: "1:119252909129:web:73f83a0ad76b00492f9398"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = firebase.auth();

export {
    auth
};