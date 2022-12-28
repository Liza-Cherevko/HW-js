
import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
function UserForm({ onSave, currentUser }) {
    const formRef = useRef();

    function onClick(e) {
        e.preventDefault();

        const form = formRef.current.elements;

        onSave({
            id: form.id.value,
            name: form.name.value,
            surname: form.surname.value,
            email: form.email.value,
        });

        formRef.current.reset();
    }
    return (
        <form className="row" ref={formRef}>
            <div className="three columns">
                <input type="hidden" defaultValue={currentUser.id} name="id"  />
                <input
                    type="text"
                    defaultValue={currentUser.name}
                    placeholder="Name"
                    name="name"
                />
            </div>
            <div className="three columns">
                <input
                    type="text"
                    defaultValue={currentUser.surname}
                    placeholder="Surname"
                    name="surname"
                />
            </div>
            <div className="three columns">
                <input
                    type="text"
                    defaultValue={currentUser.email}
                    placeholder="Email"
                    name="email"
                />
            </div>
            <div className="three columns">
                <button type="button" onClick={onClick} to=".."  component={NavLink}>
                    Save
                </button>
            </div>
        </form>
    );
}

export default UserForm;