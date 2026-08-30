var uiElement = document.querySelector(".ui-list");
var inputField = document.querySelector(".input-list");

if (uiElement.children.length === 0) {
    uiElement.innerHTML = "The List is Empty.";
}

function addToList() {
    console.log(inputField.value)
    uiElement.innerHTML += `<li>Task: ${inputField.value} <button onclick="updateList(this)" class="update-btn">Update</button></li>`;
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
    selectedTask.innerHTML = `<li>Task: ${updatedText} <button onclick="updateList(this)" class="update-btn">Update</button></li>`;
}