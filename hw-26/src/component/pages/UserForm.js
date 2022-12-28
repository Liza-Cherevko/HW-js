// import React, { useRef } from 'react';
// import {useNavigate} from "react-router-dom";
// import useUser from '../pages/hooks/useUser';
// import {useParams } from 'react-router-dom';

// function AddUser({ onSave }) {
//     const formRef = useRef();
//     const { id } = useParams();
//     const navigate = useNavigate();
//     const { user, changeUser, saveUser } = useUser(id);
   
//     function onClick(e) {
//         e.preventDefault();
//         const form = formRef.current.elements;
//         saveUser({
//             id: form.id.value,
//             name: form.name.value,
//             surname: form.surname.value,
//             email: form.email.value,
//         });

//         formRef.current.reset();
//     }

//     function onInputChange(e) {
//         changeUser({
//             [e.target.name]: e.target.value,
//         });
//     }


//     return (
//         <div className="container-md">
//             <div className="w-75 mx-auto shadow p-5">
//                 <h2 className="text-center mb-4">Add User</h2>
//             <form onSubmit={onClick}>
//                 <div className="form-group">
//                     <input type="text" className="form-control form-control-lg"
//                            placeholder="Name" name="name" value={user.name}  onChange={onInputChange}/>
//                 </div>
//                 <div className="form-group">
//                     <input type="text" className="form-control form-control-lg"
//                            placeholder="Surname" name="username" value={user.username}  onChange={onInputChange}/>
//                 </div>
//                 <div className="form-group">
//                     <input type="text" className="form-control form-control-lg"
//                            placeholder="Email" name="email" value={user.email}  onChange={onInputChange}/>
//                 </div>
//                 <button type="submit" className="btn btn-primary">Save</button>
//             </form>
//             </div>
//         </div>
//     );

// }

// export default AddUser;
import React, { useRef } from 'react';
import useUser from './hooks/useUser'
import { NavLink, useNavigate, useParams } from 'react-router-dom';
;



function UserForm({ onSave }) {
    const navigate = useNavigate()
    const formRef = useRef();
    const { id } = useParams();
    const { user, changeUser, saveUser } = useUser(id);


    function onInputChange(e) {
        changeUser({
            [e.target.name]: e.target.value,
        });
    }
    function onFormSubmit(e) {
        e.preventDefault();
        saveUser(user).then(() => navigate('..'));
    }


    
    return (
         <div className="container-md">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Add User</h2>

            <form onSubmit={onFormSubmit}>
                <div className="form-group">
                        <input type="text" className="form-control form-control-lg"
                            placeholder="Name" name="name" value={user.name} onChange={onInputChange } />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control form-control-lg"
                           placeholder="Surname" name="surname" value={user.surname} onChange={onInputChange }  />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control form-control-lg"
                           placeholder="Email" name="email" value={user.email} onChange={onInputChange }  />
                </div>
                    <button type="submit" className="btn btn-primary" >Save</button>
            </form>
            </div>
        </div>
    );
}

export default UserForm;