const form = document.getElementById('task-form');
const taskInput = document.getElementById('new-task');
const taskList = document.getElementById('task-list');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const newTask = taskInput.value.trim();
    if (newTask.length > 0) {
        addTask(newTask);
        taskInput.value = '';
    }
});

function addTask(task) {
    const li = document.createElement('li');
    li.innerHTML = `
        <span class="task-text">${task}</span>
        <button class="complete-btn">Mark as Completed</button>
        <button class="delete-btn">Cancel</button>
    `;
    taskList.appendChild(li);
    bindTaskEvents(li);
}

function bindTaskEvents(li) {
    const completeBtn = li.querySelector('.complete-btn');
    const deleteBtn = li.querySelector('.delete-btn');

    completeBtn.addEventListener('click', () => {
        li.firstElementChild.classList.toggle('completed');
    });

    deleteBtn.addEventListener('click', () => {
        li.remove();
    });
}