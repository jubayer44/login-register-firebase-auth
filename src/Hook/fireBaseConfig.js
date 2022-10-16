// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEB3yL9mfiCawpZk1lgz60Jpp1Pj2QAOw",
  authDomain: "email-and-password-auth-2.firebaseapp.com",
  projectId: "email-and-password-auth-2",
  storageBucket: "email-and-password-auth-2.appspot.com",
  messagingSenderId: "448134199138",
  appId: "1:448134199138:web:52ae78e18234be5b3d1e3b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;