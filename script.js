function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  // Mark as done on click
  li.addEventListener("click", () => {
    li.classList.toggle("done");
  });

  // Delete button
  const del = document.createElement("span");
  del.textContent = "❌";
  del.addEventListener("click", () => {
    li.remove();
  });
  li.appendChild(del);

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}
