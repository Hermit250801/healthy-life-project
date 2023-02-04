// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth, sendSignInLinkToEmail } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPP6aGGm1H8fTMO1O8bLPKhyM8H4ppM88",
  authDomain: "healthy-life-project-8373c.firebaseapp.com",
  projectId: "healthy-life-project-8373c",
  storageBucket: "healthy-life-project-8373c.appspot.com",
  messagingSenderId: "498041089008",
  appId: "1:498041089008:web:3fd48b246706cf577acb35",
  measurementId: "G-BN8ERLCX80",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth()
