// let listEl = document.querySelector('#list')
// let removeEl = document.querySelector('#remove')
// let rollBackEl = document.querySelector('#rollback')
// let addEl = document.querySelector('#add')

// removeEl.addEventListener('click', onRemoveBtnClick)
// rollBackEl.addEventListener('click', onRollbackBtnClick)
// addEl.addEventListener('click', onAddBtnClick)
// function onRemoveBtnClick() {
//     listEl.remove()
//     console.log(listEl)
// }

// function onRollbackBtnClick() {
//     document.body.append(listEl)
//     // document.body.prepend(listEl)
// }
// function onAddBtnClick() {
//     const liEl = document.createElement('li');
//     const spanEl = document.createElement('span')
//     spanEl.textContent = 'text span'
 
 
//     liEl.addEventListener('click', () => {
//         liEl.remove()
//     })


//     liEl.append(spanEl)
//     listEl.append(liEl)
// }

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
    const rowEl = generateContactElement(contact)

    contactListEl.append(rowEl)
}

function generateContactElement({name, surname, phone}){
    const trEl = document.createElement('tr');

    trEl.append(createCell(name))
    trEl.append(createCell(surname))
    trEl.append(createCell(phone))
    trEl.append(createCell(''));

    return trEl;
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
