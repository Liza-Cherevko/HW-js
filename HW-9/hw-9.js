const createTaskEl = document.querySelector('#createTask');
const addTaskBtn = document.querySelector('#addTaskBtn');
const taskslist = document.querySelector('#tasksList');

addTaskBtn.addEventListener('click', addNewTodoList);

function addNewTodoList() { 
    const newTaskValue = getNewTask();
    addNewTask(newTaskValue)
    resetForm()
  
}

function getNewTask() { 
    return createTaskEl.value
}


function addNewTask(){
    const NewliEl = document.createElement('li');
    const addTask = getNewTask();
    NewliEl.classList.add('newCreateTask')
    NewliEl.append(addTask)
    taskslist.append(NewliEl)
    addTaskDone(NewliEl)
}

function resetForm() { 
    createTaskEl.value = '';
}


function addClassNewTask(value) { 
    value.classList.add('newCreateTask')
}
function addTaskDone(value) { 
    value.addEventListener('click', () => {
        value.classList.add('task-done')
})
}




