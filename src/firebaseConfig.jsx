// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDye8Xn7WXJ17PZJtpau2ALgX11xfJUn7o",
  authDomain: "fir-auth-1c31f.firebaseapp.com",
  projectId: "fir-auth-1c31f",
  storageBucket: "fir-auth-1c31f.appspot.com",
  messagingSenderId: "373947255232",
  appId: "1:373947255232:web:c4882e59bedf15d3116025",
  measurementId: "G-TFBFB4XR16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;