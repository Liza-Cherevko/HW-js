const TASK_ITEM_CLASS = 'task-item';
const TASK_ITEM_ID = 'task-id';
const DELETE_BTN_CLASS = 'delete-btn';
const TASK_DONE_CLASS = 'done';

const taskListEl = document.querySelector('#taskList');
const taskNameInput = document.querySelector('#taskNameInput');
const newTaskForm = document.querySelector('#newTaskForm');
const errorContainerEl = document.querySelector('#errorContainer');
const todoItemTemplate = document.querySelector('#todoItemTemplate').innerHTML;
const idEl = document.querySelector('#id');

newTaskForm.addEventListener('submit', onNewTaskFormSubmit);
taskNameInput.addEventListener('input', onTaskNameInput);
taskListEl.addEventListener('click', onListClick);

let list = [
    { id: 1, title: 'Do something 1' },
    { id: 2, title: 'Do something 2' },
    { id: 3, title: 'Do something 3' }
];
init();

function init() { 
    renderTasks(list);
}
function renderTasks(list) { 
   list.forEach(addTodo)
}

function onListClick(e) {
    if (e.target.classList.contains(DELETE_BTN_CLASS)) {
        const contactId = getContactId(e.target);
        console.log(contactId)
        deleteContact(contactId);
    }
    // } else if (e.target.classList.contains(TASK_ITEM_CLASS)) {
    //     toggleTodo(e.target);
    // }
}




function onNewTaskFormSubmit(e) {
    e.preventDefault();

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
        id: idEl.value,
        title: taskNameInput.value,
    };
}

function addTodo(todo) {
    const todoHtml = generateTodoHtml(todo);
    taskListEl.insertAdjacentHTML('beforeEnd', todoHtml);
}

function generateTodoHtml({id, title }) {
    return todoItemTemplate
    .replaceAll('{{id}}', id)
    .replaceAll('{{title}}',title);     
}

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
function getContactId(elem) {
    return +elem.closest(TASK_ITEM_CLASS).dataset.contactId;
}
// function getTaskItemId(elem) {
//     return +elem.closest(TASK_ITEM_ID).dataset.contactId;
    
// }
// console.log(e.target.classList.contains(TASK_ITEM_ID))