const contactListEl = document.querySelector('#contactsList');
const nameEl = document.querySelector('#name');
const surnameEl = document.querySelector('#surname');
const phoneEl = document.querySelector('#phone');
const addBtnEl = document.querySelector('#addContactBtn');
let itemTemplate = document.querySelector('#newContactItemTemplate').innerHTML;
const errorContainerEl = document.querySelector('#errorContainer');
const globalContactValue = document.querySelector('#globalContactValue')

addBtnEl.addEventListener('click', onAddcontactBtnclick);
globalContactValue.addEventListener('input', onTaskNameInput);

function onAddcontactBtnclick() { 
    if (!validateInput()) return;
    const newContact = getValues();
    addContact(newContact)
    resetForm()
}

//  беру значение

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
    const template = itemTemplate
         .replaceAll('{{name}}', contact.name)
         .replaceAll('{{surname}}', contact.surname)
         .replaceAll('{{phone}}', contact.phone);
    return template;
}
//

// вадидация
function resetForm() { 
    nameEl.value = '';
     surnameEl.value = '';
     phoneEl.value = '';
}
function onTaskNameInput() {
    validateInput();
}
function validateInput() { 
    resetValidation()
    const value = {
        name: nameEl.value,
        surname: surnameEl.value,
        phone: phoneEl.value,
    }
    console.log(value)
    return validateValue(value);
    }


function validateValue(value) {
    if (value === '') {
        errorContainerEl.textContent = 'Fields is required';
        addContactBtn.disabled = true;
        return false;
    } else {
        errorContainerEl.textContent = '';
        addContactBtn.disabled = false;

        return true;
    }
}

// function resetValidation() { 
//          nameEl.classList.remove('invalid-input')
//         surnameEl.classList.remove('invalid-input')
//         phoneEl.classList.remove('invalid-input')
// }







// function createCell(value){
//     const tdEl = document.createElement('td');

//     tdEl.textContent = value;

//     return tdEl;
// }



