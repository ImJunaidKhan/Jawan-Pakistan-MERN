// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBGFsMA9DXHJGBoxrdQUyM7CBvHgYqhG2Y",
    authDomain: "jawanpak-todoapp.firebaseapp.com",
    projectId: "jawanpak-todoapp",
    storageBucket: "jawanpak-todoapp.firebasestorage.app",
    messagingSenderId: "1078748246257",
    appId: "1:1078748246257:web:32727e1fa3a2a36f62f950"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const email = document.querySelector(".email");
const password = document.querySelector(".password");
const login = document.querySelector(".login-btn");

const auth = getAuth();

login.addEventListener("click", () => {
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            alert("Login Successful!");
            window.location.href = "todo.html";
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage + errorCode);
        })
}
)



