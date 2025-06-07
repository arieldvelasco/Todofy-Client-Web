import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "<apiKey>",
    authDomain: "<authDomain>",
    projectId: "<projectId>",
    storageBucket: "<storageBucket>",
    messagingSenderId: "<messagingSenderId>",
    appId: "<appId>",
    measurementId: "<measurementId>"
};

const app = initializeApp(firebaseConfig);