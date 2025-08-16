let tasks = [];

function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = task.done ? "done" : "";
    li.innerHTML = `
      ${task.name}
      <button onclick="markDone(${index})">${task.done ? "Undo" : "Done"}</button>
    `;
    taskList.appendChild(li);
  });
}

function addTask() {
  const input = document.getElementById("taskInput");
  const taskName = input.value.trim();
  if (taskName === "") {
    alert("⚠️ Please enter a task!");
    return;
  }

  tasks.push({ name: taskName, done: false });
  input.value = "";
  renderTasks();
}

function markDone(index) {
  tasks[index].done = !tasks[index].done;
  renderTasks();
}

function removeCompleted() {
  tasks = tasks.filter(task => !task.done);
  renderTasks();
}
