const TASK_ITEM_CLASS = 'task-item';
const DELETE_BTN_CLASS = 'delete-btn';
const TASK_DONE_CLASS = 'done';

const taskListEl = document.querySelector('#taskList');
const taskNameInput = document.querySelector('#taskNameInput');
const newTaskForm = document.querySelector('#newTaskForm');
const errorContainerEl = document.querySelector('#errorContainer');

const taskITemTemplate = document.querySelector('#todoItemTemplate').innerHTML;

newTaskForm.addEventListener('submit', onNewTaskFormSubmit);
taskNameInput.addEventListener('input', onTaskNameInput);
taskListEl.addEventListener('click', onListClick);



function onListClick(event) {
    if (event.target.classList.contains(DELETE_BTN_CLASS)) {
        deleteTodo(event.target.parentElement);
    } else if (event.target.classList.contains(TASK_ITEM_CLASS)) {
        toggleTodo(event.target);
    }
}

function onNewTaskFormSubmit(event) {
    event.preventDefault();

    if (!validateInput()) return;

    const newTodo = getFormData();
    addTodo(newTodo);
    resetForm();
}

function onTaskNameInput() {
    validateInput();
}

function validateInput() {
    const value = taskNameInput.value;

    return validateValue(value);
}

function getFormData() {
    return {
        title: taskNameInput.value,
    };
}

function addTodo(todo) {
    // const todoEl = generateTodoElement(todo);
    // taskListEl.append(todoEl);

    const todoHtml = generateTodoHtml(todo);
    taskListEl.insertAdjacentHTML('beforeEnd', todoHtml);
}

function generateTodoHtml(todo) {
    return taskITemTemplate.replaceAll('{{title}}', todo.title);
}

// function generateTodoElement(todo) {
//     const divEl = document.createElement('div');

//     divEl.classList.add(TASK_ITEM_CLASS);
//     divEl.textContent = todo.title;

//     return divEl;
// }

function resetForm() {
    taskNameInput.value = '';
}

function toggleTodo(todoEl) {
    todoEl.classList.toggle(TASK_DONE_CLASS);
}

function deleteTodo(todoEl) {
    todoEl.remove();
}

function validateValue(value) {
    if (value === '') {
        errorContainerEl.textContent = 'Todo Name is required';
        submitBtn.disabled = true;
        return false;
    } else {
        errorContainerEl.textContent = '';
        submitBtn.disabled = false;

        return true;
    }
}