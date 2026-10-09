import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";

const email = document.querySelector(".email");
const password = document.querySelector(".password");
const signupForm = document.querySelector("#signup-form");

const auth = getAuth();

signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            alert("Login Successful!");
            window.location.href = `todo.html?email=${email.value}`;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage + errorCode);
        })
}
)



