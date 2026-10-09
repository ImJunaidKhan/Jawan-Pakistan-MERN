  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDjov4rTQKik5fZxyyYcigQ5BPwDQ4W7g0",
    authDomain: "jawanpak-user-profiles.firebaseapp.com",
    databaseURL: "https://jawanpak-user-profiles-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "jawanpak-user-profiles",
    storageBucket: "jawanpak-user-profiles.firebasestorage.app",
    messagingSenderId: "228793822572",
    appId: "1:228793822572:web:d473a4f2d6ebe4194b1749"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);