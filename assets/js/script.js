const form = document.querySelector("form");
const input = document.getElementById("task");
console.log(input);

form.onsubmit = function (e) {
  e.preventDefault();
  const taskInput = document.getElementById("task");
  const taskList = document.getElementById("task-list");
  const newItem = document.createElement("li");

  newItem.innerText = taskInput.value;
  taskList.appendChild(newItem);

  const deleteBtn = document.createElement("button");
  deleteBtn.id = "delete-button";
  deleteBtn.innerText = "Elimina";
  newItem.appendChild(deleteBtn);

  deleteBtn.onclick = function (e) {
    e.currentTarget.parentNode.remove();
  };

  newItem.onclick = function (e) {
    e.currentTarget.classList.toggle("done");
  };

  newItem.className = "list-item";

  form.reset();
};
