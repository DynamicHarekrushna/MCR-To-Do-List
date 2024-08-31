const taskInput = document.getElementById('taskInput');
const timeInput = document.getElementById('timeInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

function updateDateTime() {
    const now = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const formattedDateTime = now.toLocaleDateString('en-US', options);
    document.getElementById('dateTime').textContent = formattedDateTime;
}

addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value;
    const timeInputValue = timeInput.value;
    if (taskText.trim() !== '' && timeInputValue.trim() !== '') {
        const listItem = document.createElement('li');
        listItem.classList.add('task-list-item');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', () => {
            listItem.classList.toggle('completed');
        });
        const taskTextElement = document.createElement('span');
        taskTextElement.classList.add('task-text');
        taskTextElement.textContent = taskText;
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
            listItem.remove();
        });
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', () => {
            if (taskTextElement.isContentEditable) {
                taskTextElement.contentEditable = false;
                editBtn.textContent = 'Edit';
            } else {
                taskTextElement.contentEditable = true;
                taskTextElement.focus();
                editBtn.textContent = 'Save';
            }
        });
        const timeElement = document.createElement('span');
        timeElement.classList.add('task-time');
        timeElement.textContent = ` (${timeInputValue})`;
        listItem.appendChild(checkbox);
        listItem.appendChild(taskTextElement);
        listItem.appendChild(timeElement);
        listItem.appendChild(editBtn);
        listItem.appendChild(deleteBtn);
        listItem.dataset.time = timeInputValue; 
        taskList.appendChild(listItem);
        taskInput.value = '';
        timeInput.value = '';

        listItem.classList.add('visible');
    }
});

updateDateTime();

setInterval(updateDateTime, 1000);