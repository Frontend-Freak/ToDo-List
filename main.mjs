const addHighTaskForm = document.getElementById("addHighTaskForm");
const addLowTaskForm = document.getElementById("addLowTaskForm");
const addHighTask = document.getElementById("highTask");
const addLowTask = document.getElementById("lowTask");
const savedHighTask = document.getElementById("savedHighTask");
const savedLowTask = document.getElementById("savedLowTask"); 

const allTasks = [];

import data from './tasks.json' with {type: "json"};

data.tasks.forEach(task => {
    try {
        if (task.text.length > 30) { throw new Error('Ошибка: задача не должна превышать 30 символов') }
        if (task.text.length < 3) { throw new Error('Ошибка: задача не может быть меньше 3 символов') }
        saveTask(task.text, task.priority);
    } catch(error) {
        console.error(error.message)
    }
});

renderTask()


function saveTask(taskText, priority) {
	const taskObject = {
		text: taskText,
		priority: priority,
	};
	allTasks.push(taskObject);
	console.log(allTasks);
	renderTask();
	
}

function renderTask() {
	savedHighTask.innerHTML = "";
	savedLowTask.innerHTML = "";

	allTasks.forEach((task, index) => {
		const newTask = document.createElement("label");
		const checkbox = document.createElement("input");
		const taskText = document.createElement("span");
		const deleteButton = document.createElement("button");

		checkbox.type = "checkbox";
		checkbox.className = "checkbox";
		taskText.textContent = task.text;
		deleteButton.textContent = "×";
		deleteButton.className = "delete-button";

		newTask.appendChild(checkbox);
		newTask.appendChild(taskText);
		newTask.appendChild(deleteButton);
		newTask.className = "task-added";

		const priorityTask =
			task.priority === "high" ? savedHighTask : savedLowTask;
		priorityTask.appendChild(newTask);

		deleteButton.addEventListener("click", () => {
			allTasks.splice(index, 1);
			renderTask();
		});
	});
}

addHighTaskForm.addEventListener("submit", function (event) {
	event.preventDefault();
	try {
		const taskText = addHighTask.value;

		if (taskText.length < 3) {
			throw new Error("Ошибка: задача должна быть не меньше 3 символов");
		}
		if (taskText.length > 30) {
			throw new Error("Ошибка: задача должна быть не больше 30 символов");
		}

		saveTask(taskText, "high");
		addHighTask.value = "";
	} catch (error) {
		alert(error.message);
	}
});

addLowTaskForm.addEventListener("submit", function (event) {
	event.preventDefault();
	try {
		const taskText = addLowTask.value;

		if (taskText.length < 3) {
			throw new Error("Ошибка: задача должна быть не меньше 3 символов");
		}
		if (taskText.length > 30) {
			throw new Error("Ошибка: задача должна быть не больше 30 символов");
		}
		saveTask(taskText, "low");
		addLowTask.value = "";
	} catch (error) {
		alert(error.message);
	}
});