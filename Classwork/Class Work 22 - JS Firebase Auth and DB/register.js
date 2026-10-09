import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-database.js";

const name = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const phone = document.querySelector("#phone");
const gender = document.querySelector("#gender");
const dob = document.querySelector("#dob");

const signupForm = document.querySelector("#signup-form");

const auth = getAuth();
const db = getDatabase();

signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            return set(ref(db, "users/" + user.uid), {
                name: name.value,
                email: email.value,
                phone: phone.value,
                gender: gender.value,
                dob: dob.value
            });
        })

        .then(() => {
            alert("Registration Successful");
            window.location.href = `index.html`;
        })

        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage + errorCode);
            // ..
        });


})



