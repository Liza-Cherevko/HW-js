const createTaskEl = document.querySelector('#createTask');
const addTaskBtn = document.querySelector('#addTaskBtn');
const taskslist = document.querySelector('#tasksList');
addTaskBtn.addEventListener('click', addNewTodoList);

function addNewTodoList() { 
    const newTaskValue = getNewTask();
    addNewTask(newTaskValue)
    resetForm()
    removeTask(addTaskDone)
   
}

function getNewTask() { 
    return createTaskEl.value
}


function addNewTask(){
    const NewliEl = document.createElement('li');
    const addTask = getNewTask();
    NewliEl.append(addTask)
    taskslist.append(NewliEl)
    addClassNewTask(NewliEl)
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

function removeTask(value) { 
    value.addEventListener('click', () => {
        value.remove()
                })
    }


