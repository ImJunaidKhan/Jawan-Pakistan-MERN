import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";

import { firebaseConfig } from "./config.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const email = document.querySelector(".email");
const password = document.querySelector(".password");
const signupForm = document.querySelector("#signup-form");

signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            const user = userCredential.user;
            alert("Login Successful!");
            window.location.href = "todo.html";
        })
        .catch((error) => {
            alert(error.message);
        });
});
