import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";
import { getDatabase, ref, set, get, update, remove } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-database.js";

import { firebaseConfig } from "./config.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

var uiElement = document.querySelector(".ui-list");
var inputField = document.querySelector(".input-list");
var currentUser = null;

// Check if user is logged in
onAuthStateChanged(auth, (user) => {
    if (user) {
        currentUser = user;
        getTodos();
    }

    else {
        window.location.href = "index.html";
    }
});

// Read tasks
function getTodos() {
    get(ref(db, "todos/" + currentUser.uid)).then((snapshot) => {
        uiElement.innerHTML = "";
        var data = snapshot.val();

        if (!data) {
            uiElement.innerHTML = "The List is Empty.";
            return;
        }

        for (var key in data) {
            uiElement.innerHTML += `
                <li>
                    <input type="checkbox" onclick="toggleTask(this)">
                    <span>${data[key].task}</span>
                    <button onclick="updateList('${key}')" class="update-btn">Update</button>
                    <button onclick="deleteList('${key}')" class="delete-task">Delete</button>
                </li>
            `;
        }
    });
}

// Add task
function addToList(e) {
    if (e) e.preventDefault();

    if (inputField.value === "") {
        alert("Please enter a task!");
        return;
    }

    var taskId = Date.now();
    set(ref(db, "todos/" + currentUser.uid + "/" + taskId), {
        task: inputField.value
    }).then(() => {
        inputField.value = "";
        getTodos();
    });
}

// Update task
function updateList(key) {
    var updatedText = prompt("Rename Task:");

    if (updatedText) {
        update(ref(db, "todos/" + currentUser.uid + "/" + key), {
            task: updatedText
        }).then(() => {
            getTodos();
        });
    }
}

// Delete task
function deleteList(key) {
    remove(ref(db, "todos/" + currentUser.uid + "/" + key)).then(() => {
        getTodos();
    });
}

// Clear all tasks
function clearList() {
    remove(ref(db, "todos/" + currentUser.uid)).then(() => {
        getTodos();
    });
}

// Checkbox line-through
function toggleTask(element) {
    var taskText = element.nextElementSibling;
    if (element.checked) {
        taskText.style.textDecoration = "line-through";
    } else {
        taskText.style.textDecoration = "none";
    }
}

// Logout
function logoutUser() {
    signOut(auth).then(() => {
        window.location.href = "index.html";
    });
}

window.addToList = addToList;
window.clearList = clearList;
window.updateList = updateList;
window.deleteList = deleteList;
window.toggleTask = toggleTask;
window.logoutUser = logoutUser;