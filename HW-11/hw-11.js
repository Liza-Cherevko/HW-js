
const TASK_ITEM_CLASS = 'task-item';
const TASK_ITEM_ID = '.task-item-id';
const DELETE_BTN_CLASS = 'delete-btn';
const EDIT_BTN_CLASS = 'edit-btn';
const TASK_DONE_CLASS = 'done';

const taskListEl = document.querySelector('#taskList');
const taskNameInput = document.querySelector('#taskNameInput');
const newTaskForm = document.querySelector('#newTaskForm');
const errorContainerEl = document.querySelector('#errorContainer');
const todoItemTemplate = document.querySelector('#todoItemTemplate').innerHTML;
const idEl = document.querySelector('#id');
const formWrap = document.querySelector('#formWrap');
const editForm = document.querySelector('#editForm');

newTaskForm.addEventListener('submit', onNewTaskFormSubmit);
taskNameInput.addEventListener('input', onTaskNameInput);
taskListEl.addEventListener('click', onListClick);

let list = [
    { id: 1, title: 'Do something 1' },
    { id: 2, title: 'Do something 2' },
    { id: 3, title: 'Do something 3' }
];

init();

function onListClick(e) {
    const taskId = getTaskItemId(e.target);
    if (e.target.classList.contains(DELETE_BTN_CLASS)) {
        deleteTodo(taskId);
    }  else if (e.target.classList.contains(EDIT_BTN_CLASS)) {
        editTodo(taskId);
    }
    else if (e.target.classList.contains(TASK_ITEM_CLASS)) {
        toggleTodo(e.target);
    }
}

function onNewTaskFormSubmit(e) {
    e.preventDefault();

    if (!validateInput()) return;

    const newTodo = getFormData();
    saveTodo(newTodo);
    resetForm();
}

function onTaskNameInput() {
    validateInput();
}

function init() { 
    renderTasks(list);
}

function renderTasks(list) { 
    taskListEl.innerHTML = '';
   list.forEach(renderTodo)
}
function renderTodo(todo) {
    const todoHtml = generateTodoHtml(todo);
    taskListEl.insertAdjacentHTML('beforeEnd', todoHtml);
}

function generateTodoHtml({id, title }) {
    return todoItemTemplate
    .replaceAll('{{id}}', id)
    .replaceAll('{{title}}',title);     
}
function getFormData() {
    return {
        id: +idEl.value,
        title: taskNameInput.value,
    };
}
function saveTodo(todo) { 
    if (todo.id === 0) {
        addTodo(todo);
    } else { 
        udateTodo(todo);
    }
}
function addTodo(todo) { 
    todo.id = Date.now();
    list.push(todo);
    renderTasks(list)
}
function udateTodo(todo) { 
    list = list.map((item) => (item.id !== todo.id ? item : todo));

    renderTasks(list)
}

function validateInput() {
    const value = taskNameInput.value;

    return validateValue(value);
}

function resetForm() {
    taskNameInput.value = '';
    idEl.value = '';
}
function fillForm({id, title }) {
    idEl.value = id;
    taskNameInput.value = title;
}

function toggleTodo(todoEl) {
    todoEl.classList.toggle(TASK_DONE_CLASS);
}

function deleteTodo(id) {
    list = list.filter((item) => item.id !== id);

    renderTasks(list);
}

function editTodo(id) { 
    const task = list.find((item) => item.id === id);
    fillForm(task);
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
function getTaskItemId(elem) {
    return +elem.closest(TASK_ITEM_ID).dataset.taskId;
}



