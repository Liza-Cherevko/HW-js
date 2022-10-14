const TASK_ITEM_CLASS= 'task-item';
const TASK_ITEM_SELECTOR = '.' + TASK_ITEM_CLASS;
const DELETE_BTN_CLASS = 'delete-btn'
const TASK_DONE_CLASS = 'done';

const taskListEl = document.querySelector('#taskList');
const taskNameInput = document.querySelector('#taskNameInput');
const newTaskForm = document.querySelector('#newTaskForm');
const errorContainerEl = document.querySelector('#errorContainer');
const todoItemTemplate = document.querySelector('#todoItemTemplate').innerHTML;


newTaskForm.addEventListener('submit', onNewTaskFormSubmit)
taskListEl.addEventListener('click', onTaskListElClick)
let todoList = [
    // {id:1, title:'Task1', isDone: true},
    // {id:2, title:'Task2', isDone: false},
    // {id:3, title:'Task3', isDone: true},
];

init()

function init (){
    fetchTodo()
    renderList(todoList)
}

function fetchTodo(){
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then((res)=> res.json())
    .then((data)=>{
        todoList = data
        renderList(todoList);
    });
}

function onNewTaskFormSubmit(e){
     e.preventDefault();
   const newTask = getFormValues();
   addTodo(newTask)
   resetForm()
}

function onTaskListElClick(e){
    const todoId =  getTodoId(e.target)
    // if(e.target.classList.contains(DELETE_BTN_CLASS)){
    //    deleteTodo(todoId);
    // }
    // if(e.target.classList.contains(TASK_ITEM_CLASS)){
    //    toggleTodo(todoId)
    // }

  switch(true){
        case e.target.classList.contains(DELETE_BTN_CLASS):
           return deleteTodo(todoId); 
        case e.target.classList.contains(TASK_ITEM_CLASS):
           return toggleTodo(todoId) ;
  }

   }

function renderList(list){
//   const htmls = list.map(generateTodoItemHtml);
  taskListEl.innerHTML =list.map(generateTodoItemHtml).join('')

}

function generateTodoItemHtml({id, title, isDone}){
  return todoItemTemplate
  .replaceAll('{{title}}', title )
  .replaceAll('{{id}}', id )
  .replaceAll('{{completed}}', isDone ? TASK_DONE_CLASS :'' )
}

function getFormValues(){
    return{
        title: taskNameInput.value,
    }
}

function addTodo(todo){
    todo.id = Date.now();
    todo.isDone = false;
    // todoList.push(todo)
    todoList = [...todoList, todo]
    renderList(todoList)
  
}
function resetForm(){
    taskNameInput.value = '';
}

function deleteTodo(id){
    todoList = todoList.filter((item)=> item.id !== id)
 renderList(todoList)
}
function toggleTodo(id){
//        const todo = todoList.find((item) =>item.id === id);
//   todo.isDone = !todo.isDone;
// const updatedTodo = {
//     ...todo,
//     isDone: !todo.isDone,
// }
todoList = todoList.map((item)=> item.id !== id
 ? item : {...item, isDone: !item.isDone});

  renderList(todoList)
}
function getTodoId(el){
const parent = el.closest(TASK_ITEM_SELECTOR );
return parent ? +parent.dataset.todoId : null;
}