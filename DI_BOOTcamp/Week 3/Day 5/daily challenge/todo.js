// todo.js - Todo List

const tasks = [];
let taskIdCounter = 0;

const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const listTasks = document.querySelector(".listTasks");

function addTask(event) {
    event.preventDefault();

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const taskObj = {
        task_id: taskIdCounter++,
        text: taskText,
        done: false
    };

    tasks.push(taskObj);
    renderTask(taskObj);

    taskInput.value = "";
}

function renderTask(task) {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    taskDiv.setAttribute("data-task-id", task.task_id);

    taskDiv.innerHTML = `
        <input type="checkbox" ${task.done ? 'checked' : ''}>
        <span>${task.text}</span>
        <button class="delete-btn"><i class="fas fa-times"></i></button>
    `;

    const checkbox = taskDiv.querySelector("input[type='checkbox']");
    checkbox.addEventListener("change", () => {
        doneTask(task.task_id, checkbox.checked);
    });

    const deleteBtn = taskDiv.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", () => {
        deleteTask(task.task_id, taskDiv);
    });

    listTasks.appendChild(taskDiv);
}

function doneTask(taskId, isDone) {
    const task = tasks.find(t => t.task_id === taskId);
    if (task) task.done = isDone;

    const taskDiv = document.querySelector(`[data-task-id="${taskId}"]`);
    if (taskDiv) {
        taskDiv.classList.toggle("done", isDone);
    }
}

function deleteTask(taskId, taskElement) {
    const index = tasks.findIndex(t => t.task_id === taskId);
    if (index !== -1) tasks.splice(index, 1);

    taskElement.remove();
}

taskForm.addEventListener("submit", addTask);