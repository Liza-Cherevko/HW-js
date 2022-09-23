const input = document.querySelector('#input');
const addTaskBtn = document.querySelector('#addTaskBtn');
const result = document.querySelector('#result');

addTaskBtn.addEventListener('click', onAddTaskBtnclick)

function onAddTaskBtnclick() {
    const newInput = getTaskValue();
    // isInputInvalid(newInput);
    if(newInput==='') return
    createAndDeleteInput(newInput)
    resetForm()
}

function getTaskValue() {
   return input.value   
}
// function isInputInvalid(value) { 
//     if(value==='') return
// }

function createAndDeleteInput(value) {
    const li = document.createElement('li')
    const spanEl = document.createElement('span')
    const btn = document.createElement('button')
    li.className = 'newCreateTask'
    spanEl.textContent = value
    // li.textContent = value
    btn.className = 'deleteBtn'
    btn.textContent = 'add'
    li.append(spanEl)
    li.append(btn)
    btn.addEventListener('click', (e) => { 
        console.log(li)
        result.removeChild(li)
    })
  
    taskDoneStyle(li)

    result.appendChild(li)
}

function resetForm() { 
    input.value = '';
}

function taskDoneStyle(value) { 
    value.addEventListener('click', () => {
        value.classList.add('task-done')
})
}


    



