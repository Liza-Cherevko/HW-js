
import { Button, Paper, TextField } from '@mui/material';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
// import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import useUser from '../hooks/useUser';

function UserForm() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { user, changeUser, saveUser } = useUser(id);
    // const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [errors, setErrors] = useState({})
    const [touched, setTouched] = useState({})
    const [isValid, setIsValid] = useState(true)


    function onInputChange(e) {
        changeUser({
            [e.target.name]: e.target.value,
        });
        setTouched({ ...touched, [e.target.name]: true })
        validate
    }

    function onFormSubmit(e) {
        e.preventDefault();
        saveUser(user).then(() => navigate('..'));
    }
   


    function validate(values) { 
        const errors = {}
        if (!values.name) { 
            errors.name='Name is Required'
        }
        if (!values.surname) { 
            errors.surname='Surname is Required'
        }
        if (!values.email) { 
            errors.email='Email is Required'
        }
        setIsValid(!Object.keys(errors).length)
        setErrors(errors);
    }



    return (
        <Paper sx={{ marginTop: '20px' }}>
            <form onSubmit={onFormSubmit}>
                <TextField
                    name="name"
                    label="Name"
                    variant="outlined"
                    fullWidth
                    value={user.name}
                    onChange={onInputChange}
                    // {...register("name", { required: "Name is required" })}
                    // error={Boolean(errors.name)}
                    // helperText={errors.name?.message}
                />
               
                <TextField
                    name="surname"
                    label="Surname"
                    variant="outlined"
                    fullWidth
                    value={user.surname}
                    onChange={onInputChange}
                    // {...register("surname", { required: "Surname is required" })}
                    // error={Boolean(errors.surname)}
                    // helperText={errors.surname?.message}
                />
           
                <TextField
                    name="email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    value={user.email}
                    onChange={onInputChange}
                    // {...register("email", { required: "Email is required" })}
                    // error={Boolean(errors.email)}
                    // helperText={errors.email?.message}
                />
             
                <Button type="submit" color="primary" variant="contained">
                    Save
                </Button>
                <Button to=".." component={NavLink}>
                    Cancel
                </Button>
            </form>
        </Paper>
    );
}

export default UserForm;