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
const errorMsEl = document.querySelector('#errorMsEl');

addBtnEl.addEventListener('click', onTaskNameInput)
newContactForm.addEventListener('submit', onFormSubmit);
contactListEl.addEventListener('click', onListClick);


function onTaskNameInput(){
    validateValues()
}

// function validateInput(){
//     const value = contactListEl.value;

//     return validateValues(value);
// }


// function validateValues() {
//     resetValidation()
//     if (errorTxt(nameEl)||errorTxt(surnameEl) || errorTxt(phoneEl) ) {
//         return false;
//     }
//     else {
//         errorMsEl.textContent = '';
//         addBtnEl.diabled = false;
//         return true;
//     }
// }
// function errorTxt(title) {
//     if (title.value === '') {
//         errorMsEl.textContent = 'ERROR. Write down the contact';
//         addBtnEl.diabled = true;
//     }
// }

function validateValues() { 
    resetValidation()
    if (nameEl.value === '') {
        errorTxt(errorMsEl) 
        return false;
    }
    if (surnameEl.value === '') {
        errorTxt(errorMsEl) 
        return false;
    }
    if (phoneEl.value === '' || isNaN(phoneEl.value)) {
        errorTxt(errorMsEl) 
        return false;
    }else {
        errorMsEl.textContent = '';
        addBtnEl.diabled = false;
        return true;
    }
}
function errorTxt(title) {
    title.textContent = 'fill in all required fields!Field "phone" number';
    addBtnEl.diabled = true;
}



function getValues() { 
    return {
        name: nameEl.value,
        surname: surnameEl.value,
        phone: phoneEl.value,
    }
}
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
    if(event.target.classList.contains(DELETE_BTN_CLASS)){
        deleteContact(event.target.parentElement);
    }
}

function deleteContact(contact) {
    contact.remove();
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


function resetValidation() { 
         nameEl.classList.remove('invalid-input')
        surnameEl.classList.remove('invalid-input')
        phoneEl.classList.remove('invalid-input')
}

function toggleContact(contactEl) {
    contactEl.classList.toggle(TASK_DONE_CLASS);
}
