var uiElement = document.querySelector(".ui-list");
var inputField = document.querySelector(".input-list");

if (uiElement.children.length === 0) {
    uiElement.innerHTML = "The List is Empty.";
}

function addToList() {
    uiElement.innerHTML += `<li><input type="checkbox" onclick="toggleTask(this)"> <span>Task: ${inputField.value}</span> <button onclick="updateList(this)" class="update-btn">Update</button> <button onclick="deleteList(this)" class="delete-task">Delete</button></li>`;
    inputField.value = "";
}

function clearList() {
    uiElement.innerHTML = "Item List Cleared.";
    uiElement.style.color = "green";
    inputField.value = "";
}

function updateList(element) {
    var selectedTask = element.parentElement;
    var updatedText = prompt("Rename Task:");
    selectedTask.innerHTML = `<input type="checkbox" onclick="toggleTask(this)"> <span>Task: ${updatedText}</span> <button onclick="updateList(this)" class="update-btn">Update</button> <button onclick="deleteList(this)" class="delete-task">Delete</button>`;
}

function deleteList(element) {
    var selectedTask = element.parentElement;
    selectedTask.remove();
}

function toggleTask(element) {
    var taskText = element.nextElementSibling;

    if (element.checked) {
        taskText.style.textDecoration = "line-through";
    }

    else {
        taskText.style.textDecoration = "none";
    }
}