import { Button, Paper, TextField  } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { useDispatch} from 'react-redux'
import MyTextField from '../../common/components/Form/MyTextField';
import React from 'react';
import useForm from '../../common/hooks/useForm';
import useUser  from '../hooks/useUser';
import { addUser } from '../../../store/actions/user';

const EMAIL_REGEXP =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

function validate(values) {
    const errors = {};

    if (!values.name) {
        errors.name = 'Name is Required';
    }
    if (!values.surname) {
        errors.surname = 'Surname is Required';
    }
    if (!values.email.toLowerCase().match(EMAIL_REGEXP)) {
        errors.email = 'Email is Invalid';
    }
    if (!values.email) {
        errors.email = 'Email is Required';
    }

    return errors;
}

function UserForm() {
    const dispatch = useDispatch()
    const { id } = useParams();
    const navigate = useNavigate();
    const { user, saveUsers } = useUser(id);

    function onFormSubmit(values) {
        // console.log('values', values);
        // saveUsers(values).then(() => navigate('..'));
        dispatch(addUser(values)).then(() => navigate('..'))
    }
    // ===

    return (
        <Paper sx={{ marginTop: '20px' }}>
            <Formik
                initialValues={user}
                enableReinitialize={true}
                validateOnMount={true}
                onSubmit={onFormSubmit}
                validate={validate}
            >
                {({ isValid }) => (
                    <Form>
                        <MyTextField name="name" label="Name" fullWidth />
                        <MyTextField name="surname" label="Surname" fullWidth />
                        <MyTextField
                            name="email"
                            type="email"
                            label="Email"
                            fullWidth
                        />
                        <Button
                            type="submit"
                            color="primary"
                            variant="contained"
                            disabled={!isValid}
                        >
                            Save
                        </Button>
                        <Button to=".." component={NavLink}>
                            Cancel
                        </Button>
                    </Form>
                )}
            </Formik>
        </Paper>
    );
}

export default UserForm;
