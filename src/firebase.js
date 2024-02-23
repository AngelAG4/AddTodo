// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZQ3gPhza0EkuKayiNNzlT94NgHDeMb3o",
  authDomain: "todo-app-yt-8fbc7.firebaseapp.com",
  projectId: "todo-app-yt-8fbc7",
  storageBucket: "todo-app-yt-8fbc7.appspot.com",
  messagingSenderId: "826017417274",
  appId: "1:826017417274:web:47459c98e2b8fdf82a8d03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)