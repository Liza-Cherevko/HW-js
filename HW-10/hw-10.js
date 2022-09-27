const contactListEl = document.querySelector('#contactsList');
const nameEl = document.querySelector('#name');
const surnameEl = document.querySelector('#surname');
const phoneEl = document.querySelector('#phone');
const addBtnEl = document.querySelector('#addContactBtn');

addBtnEl.addEventListener('click', onAddcontactBtnclick)

function onAddcontactBtnclick() { 
    if (!validateValues()) { 
        return;
    }
    const newContact = getValues();
    addContact(newContact)
    resetForm()
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
    let template = document.querySelector('#newContactItemTemplate').innerHTML;
    template = template.replaceAll('{{title}}',contact)
    console.log(template)
    return template;
}


function createCell(value){
    const tdEl = document.createElement('td');

    tdEl.textContent = value;

    return tdEl;
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











