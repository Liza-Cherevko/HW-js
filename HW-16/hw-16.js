const API_URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/users/';
const DELETE_BTN_CLASS = 'delete-btn';
const EDIT_BTN_CLASS = 'edit-btn';
const INVALID_INPUT_CLASS = 'invalid-input';
const CONTACT_ITEM_CLASS = '.contact-item';

const contactTemplate = document.querySelector('#contactTemplate').innerHTML;
const contactsListEl = document.querySelector('#contactsList');
const idEl = document.querySelector('#id');
const nameEl = document.querySelector('#name');
const surnameEl = document.querySelector('#surname');
const emailEl = document.querySelector('#phone');
const addBtnEl = document.querySelector('#addContactBtn');
const tableFooter = document.querySelector('#footer');
const formRowEl = document.querySelector('#formTr');

addBtnEl.addEventListener('click', onAddContactBtnClick);
contactsListEl.addEventListener('click', onContactsListClick);

nameEl.addEventListener('input', onInputInput);
surnameEl.addEventListener('input', onInputInput);
emailEl.addEventListener('input', onInputInput);

let list = [
    // { id: 1, name: 'Alex', surname: 'Smith', phone: '111111' },
    // { id: 2, name: 'Bob', surname: 'Jones', phone: '2222' },
    // { id: 3, name: 'John', surname: 'Snow', phone: '33333' },
];

init();

function onInputInput(e) {
    validateInput(e.target);
}

function onContactsListClick(e) {
    const contactId = getContactId(e.target);
    if (e.target.classList.contains(DELETE_BTN_CLASS)) {
     
        deleteContact(contactId);
    }
    if (e.target.classList.contains(EDIT_BTN_CLASS)) {
        const tr = e.target.closest(CONTACT_ITEM_CLASS);
        tr.classList.add('hidden');
        tr.insertAdjacentElement('afterend', formRowEl);

        editContact(contactId);
    }
}

function onAddContactBtnClick() {
    if (!validateValues()) {
        return;
    }

    const newContact = getValues();

    saveContact(newContact);
    resetForm();
}

function init() {
    fetchContacts().then(()=>renderContacts(list)) ; 
}

function fetchContacts() { 
    return fetch(API_URL)
    .then((res)=> res.json())
    .then((data)=>{
        list = data
        renderContacts(list);
    });
}


function renderContacts(list) {
    contactsListEl.innerHTML = '';
    list.forEach(renderContact);
}

function renderContact(contact) {
    const contactHtml = getContactHtml(contact);

    contactsListEl.insertAdjacentHTML('beforeend', contactHtml);
}

function getContactHtml({ id, name, surname , email }) {
    return contactTemplate
        .replaceAll('{{id}}', id)
        .replaceAll('{{name}}', name)
        .replaceAll('{{surname}}', surname  )
        .replaceAll('{{email}}', email);
}

function getValues() {
    return {
        id: +idEl.value,
        name: nameEl.value,
        surname: surnameEl.value,
        email: emailEl.value,
    };
}

function saveContact(contact) {
    if (!contact.id) {
        addContact(contact);
    } else {
        updateContact(contact);
    }
}

function addContact(contact) {
    // contact.id = Date.now();
    // list.push(contact);

fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(contact),
        headers: {
            'Content-Type': 'application/json',
        }
    }).then((res) => res.json())
     .then((data) => { 
        list = [...list, data];
        renderContacts(list);
    })
}

function updateContact(contact) {
    list = list.map((item) => (item.id !== contact.id ? item : contact));

    renderContacts(list);
}

function resetForm() {
    idEl.value = '';
    nameEl.value = '';
    surnameEl.value = '';
    emailEl.value = '';

    tableFooter.append(formRowEl);
}

function fillForm({ id, name, surname, email }) {
    idEl.value = id;
    nameEl.value = name;
    surnameEl.value = surname;
    emailEl.value = email;
}

function validateValues() {
    const elements = [nameEl, surnameEl, emailEl];

    const validationResults = elements.map(validateInput);

    return validationResults.reduce(
        (isValid, isElemValid) => isValid && isElemValid
    );
}

function validateInput(input) {
    resetInputValidation(input);

    if (input.value === '') {
        input.classList.add(INVALID_INPUT_CLASS);
        return false;
    }

    return true;
}

function resetInputValidation(input) {
    input.classList.remove(INVALID_INPUT_CLASS);
}

function deleteContact(id) {
    list = list.filter((item) => item.id !== id);
    renderContacts(list)
    fetch(API_URL + id, {
        method: 'DELETE',
    });
    fillForm(list);
}

function getContactId(elem) {
   const parent = elem.closest(CONTACT_ITEM_CLASS);
    return parent ? parent.dataset.contactId : null;
}

function editContact(id) {
    currentId = id;
    const contact = list.find((item) => item.id === id);
    const updateContact = {
        ...contact,
    }
    fillForm(contact);
        fetch(API_URL + id, {
        method: 'PUT',
        body: JSON.stringify(updateContact),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(() =>  fillForm(contact)  )
}


