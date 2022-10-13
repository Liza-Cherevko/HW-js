const TASK_ITEM_CLASS = 'task-item';
const TASK_BTN_CLASS = 'btn';
const TASK_DONE_CLASS = 'done';

const taskListEl = document.querySelector('#taskList');
const taskNameInput = document.querySelector('#taskNameInput');
const newTaskForm = document.querySelector('#newTaskForm');
const errorContainer = document.querySelector('#errorContainer');
const taskItemTemplate = document.querySelector('#todoItemTemplate').innerHTML;

newTaskForm.addEventListener('submit', onNewTaskFormSubmit)


const todoList = [
    { id: 1, title: 'Task1', isDone: false },
    { id: 1, title: 'Task1', isDone: true },
    { id: 1, title: 'Task1', isDone: false },
];
init()
function init() { 
  renderList(todoList)

}

function onNewTaskFormSubmit(e) { 
    e.preventDefault();
    const newTodo = getFormVal();
    addTodo(newTodo);
    resetForm()
}

function renderList(list) { 
    taskListEl.innerHTML=list.map(generateTodoItemHtml).join('') ;
}

function generateTodoItemHtml({ id, title, isDone}) { 
   return  taskItemTemplate
        .replaceAll('{{id}}', id)
        .replaceAll('{{title}}', title)
        .replaceAll('{{doneClass}}',  isDone ? TASK_DONE_CLASS :'')
}

function getFormVal() { 
    return {
        title: taskNameInput.value,
    }
}

function addTodo(todo) { 
    todo.id = Date.now();
    todo.isDone = false;
    todoList.push(todo)
   renderList(todoList)
}
function resetForm(){
    taskNameInput.value = '';
}