import {
    createApp
} from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import axios from "axios";
import VueAxios from "vue-axios";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";


const cartItems = localStorage.getItem('cartItems');
if (cartItems) {
    store.commit('setCartItems', JSON.parse(cartItems));
}

import {
    initializeApp
} from "firebase/app"
import {
    getFirestore
} from 'firebase/firestore/lite'
import {
    getAuth,
    onAuthStateChanged
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCQcD0deqdFqF7DlXEqvRGt-TlbpixsVCI",
    authDomain: "fir-auth-1-9e373.firebaseapp.com",
    projectId: "fir-auth-1-9e373",
    storageBucket: "fir-auth-1-9e373.appspot.com",
    messagingSenderId: "119252909129",
    appId: "1:119252909129:web:73f83a0ad76b00492f9398"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
    db
};

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log(user)
        const usuarioActivo = {
            email: user.email,
            uid: user.uid
        }
        store.dispatch('detectarUsuario', usuarioActivo)
        console.log(usuarioActivo)
        // ...
    } else {
        console.log(user)
        store.dispatch('detectarUsuario', user)
        // User is signed out
        // ...
    }
});

createApp(App).use(store).use(VueAxios, axios).use(router).mount("#app");