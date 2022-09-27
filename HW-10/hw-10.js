const TASK_DONE_CLASS = 'done';
const TASK_ITEM_CLASS = 'task-item';
const DELETE_BTN_CLASS = 'delete-btn';
const contactListEl = document.querySelector('#contactsList');
const nameEl = document.querySelector('#name');
const surnameEl = document.querySelector('#surname');
const phoneEl = document.querySelector('#phone');
const addBtnEl = document.querySelector('#addContactBtn');
const newContactForm = document.querySelector('#newContactForm')
let templateItem = document.querySelector('#newContactItemTemplate').innerHTML;



newContactForm.addEventListener('submit', onFormSubmit);
contactListEl.addEventListener('click', onListClick);


function onFormSubmit(event){
    event.preventDefault();
    if (!validateValues()) { 
    return;
     }
   const newContact = getValues();
    addContact(newContact)
     resetForm()
}

function onListClick(event){
    if (event.target.classList.contains(DELETE_BTN_CLASS)) {
        deleteContact(event.target.parentElement);
    } else if (event.target.classList.contains(TASK_ITEM_CLASS)) {
        toggleContact(event.target);
    }
}


function getValues() { 
    return {
        name: nameEl.value,
        surname: surnameEl.value,
        phone: phoneEl.value,
    }
}
function addContact(contact) { 
    const contactHtml = generateContactFormHtml(contact) 
    contactListEl.insertAdjacentHTML('beforeend', contactHtml)
}


function generateContactFormHtml(contact) { 
   let template = templateItem
    .replaceAll('{{name}}',contact.name)
    .replaceAll('{{surname}}',contact.surname)
    .replaceAll('{{phone}}',contact.phone);
    return template;
}




function resetForm() { 
    nameEl.value = '';
     surnameEl.value = '';
     phoneEl.value = '';
}

function validateValues() { 
    resetValidation()
    if (nameEl.value === '') { 
        nameEl.classList.add('invalid-input')
        return false
    };
    if (surnameEl.value === '') { 
        surnameEl.classList.add('invalid-input')
        return false
    };
    if (phoneEl.value === '') { 
        phoneEl.classList.add('invalid-input')
        return false
    };
 return true 
}

function resetValidation() { 
         nameEl.classList.remove('invalid-input')
        surnameEl.classList.remove('invalid-input')
        phoneEl.classList.remove('invalid-input')
}

function toggleContact(contactEl) {
    contactEl.classList.toggle(TASK_DONE_CLASS);
}
function deleteContact(todoEl) {
    todoEl.remove();
}








