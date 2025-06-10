const addHighTaskForm = document.getElementById('addHighTaskForm');
const addLowTaskForm = document.getElementById('addLowTaskForm');
const addHighTask = document.getElementById('highTask');
const addLowTask = document.getElementById('lowTask')
const savedHighTask = document.getElementById('savedHighTask');
const savedLowTask = document.getElementById('savedLowTask');


function saveHighTask(){
    const createTask = addHighTask.value;
    const newTask = document.createElement('label');

    const checkbox = document.createElement('input')
    const taskText = document.createElement('span')
    const deleteButton = document.createElement('button')

    newTask.appendChild(checkbox);
    newTask.appendChild(taskText);
    newTask.appendChild(deleteButton)

    newTask.className = 'task-added'
    checkbox.type = 'checkbox'
    checkbox.className = 'checkbox'
    taskText.htmlFor = 'checkboxTask'
    deleteButton.textContent = '×'

    taskText.textContent = createTask;
    savedHighTask.appendChild(newTask);

    deleteButton.addEventListener('click', () => {
        savedHighTask.removeChild(newTask)
    })
    
}



function saveLowTask(){
    const createTask = addLowTask.value;
    const newTask = document.createElement('label');

    const checkbox = document.createElement('input')
    const taskText = document.createElement('span')
    const deleteButton = document.createElement('button')

    newTask.appendChild(checkbox);
    newTask.appendChild(taskText);
    newTask.appendChild(deleteButton)

    newTask.className = 'task-added'
    checkbox.type = 'checkbox'
    checkbox.className = 'checkbox'
    taskText.htmlFor = 'checkboxTask'
    deleteButton.textContent = '×'



    taskText.textContent = createTask;
    savedLowTask.appendChild(newTask);
    deleteButton.addEventListener('click', () => {
        savedLowTask.removeChild(newTask)
    })
    
}



addHighTaskForm.addEventListener('submit', function (event){
    event.preventDefault();
});

addLowTaskForm.addEventListener('submit', function (event){
    event.preventDefault();
});

addHighTaskForm.addEventListener('submit', saveHighTask)
addLowTaskForm.addEventListener('submit', saveLowTask)

