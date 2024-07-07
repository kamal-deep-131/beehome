import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: 'AIzaSyDxNKI5x_mBSWxnam_q-epCfHc7crkjxMk',
    authDomain: "realator-5fc88.firebaseapp.com",
    projectId: "realator-5fc88",
    storageBucket: "realator-5fc88.appspot.com",
    messagingSenderId: "545283416109",
    appId: "1:545283416109:web:a7bee102b61ca2a3c198a4",
};


const app = initializeApp(firebaseConfig);
const storage = getStorage(app)
const db = getFirestore(app)
export { db, storage }