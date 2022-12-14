import { Button, Paper, TextField } from '@mui/material';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import useUser from '../hooks/useUser';
import  useForm  from '../../common/hooks/useForm';
const EMAIL_REGEXP =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

function UserForm() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { user, saveUser } = useUser(id);
    const {values, errors, touched, isValid, onInputChange, onInputBlur } = useForm(user, {validate})
    
    function onFormSubmit(e) {
        e.preventDefault();
        saveUser(values).then(() => navigate('..'));
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
        if (!EMAIL_REGEXP.test(values.email)) {
            errors.email = 'Email is invalid';
        }
        return errors;
    }



    return (
        <Paper sx={{ marginTop: '20px' }}>
            <form onSubmit={onFormSubmit}>
                <TextField
                    name="name"
                    label="Name"
                    variant="outlined"
                    fullWidth
                    value={values.name}
                    onChange={onInputChange}
                    onBlur={ onInputBlur}
                    error={touched.name && !!errors.name}
                    helperText={touched.name ? errors.name : null}
                    

                />

                <TextField
                    name="surname"
                    label="Surname"
                    variant="outlined"
                    fullWidth
                    value={values.surname}
                    onChange={onInputChange}
                    onBlur={ onInputBlur}
                    error={ touched.surname && !!errors.surname}
                    helperText={touched.surname ? errors.surname : null}
                />

                <TextField
                    name="email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    value={values.email}
                    onChange={onInputChange}
                    onBlur={ onInputBlur}
                    error={ touched.email && !!errors.email}
                    helperText={touched.email ? errors.email : null}
                />

                <Button type="submit" color="primary" variant="contained" disabled={!isValid}>
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