import { Button, Paper, TextField  } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import { NavLink, useNavigate, useParams } from 'react-router-dom';

import MyTextField from '../../common/components/Form/MyTextField';
import React from 'react';
import useForm from '../../common/hooks/useForm';
import useUser from '../hooks/useUser';

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
    const { id } = useParams();
    const navigate = useNavigate();
    const { user, saveUser } = useUser(id);

    function onFormSubmit(values) {
        // console.log('values', values);
        saveUser(values).then(() => navigate('..'));
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
// import { Button, Paper, TextField } from '@mui/material';
// import { Field, Form, Formik } from 'formik';
// import { NavLink, useNavigate, useParams } from 'react-router-dom';

// import useForm from '../hooks/useForm';
// import useUser from '../hooks/useUser';

// const EMAIL_REGEXP =
//     /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

// function validate(values) {
//     const errors = {};

//     if (!values.name) {
//         errors.name = 'Name is Required';
//     }
//     if (!values.surname) {
//         errors.surname = 'Surname is Required';
//     }
//     if (!values.email.toLowerCase().match(EMAIL_REGEXP)) {
//         errors.email = 'Email is Invalid';
//     }
//     if (!values.email) {
//         errors.email = 'Email is Required';
//     }

//     return errors;
// }

// function UserForm() {
//     const { id } = useParams();
//     const navigate = useNavigate();
//     const { user, saveUser } = useUser(id);
//     const {
//         values,
//          errors,
//           touched,
//            isValid, 
//            onInputBlur, 
//            onInputChange
//     } = useForm(user)



//     function validate(values) {
//         const errors = {}
//         if (!values.name) {
//             errors.name='Name is Required'
//         }
//         if (!values.surname) {
//             errors.surname='Surname is Required'
//         }
//         if (!values.email) {
//             errors.email='Email is Required'
//         }
//         if (!EMAIL_REGEXP.test(values.email)) {
//             errors.email = 'Email is invalid';
//         }
//         setIsValid(!Object.keys(errors).length)
//         setErrors(errors);
//     }


//     function onFormSubmit(e) {
//         e.preventDefault();
//         saveUser(values).then(() => navigate('..'));
//     }
    
//     return (
//         <Paper sx={{ marginTop: '20px' }}>
//             <Formik
//                 initialValues={user}
//                 enableReinitialize={true}
//                 validateOnMount={true}
//                 onSubmit={onFormSubmit}
//                 validate={validate}
//             >
//                 {({ isValid }) => (
//                     <Form>
//                         <MyTextField name="name" label="Name" fullWidth />
//                         <MyTextField name="surname" label="Surname" fullWidth />
//                         <MyTextField
//                             name="email"
//                             type="email"
//                             label="Email"
//                             fullWidth
//                         />
//                         <Button
//                             type="submit"
//                             color="primary"
//                             variant="contained"
//                             disabled={!isValid}
//                         >
//                             Save
//                         </Button>
//                         <Button to=".." component={NavLink}>
//                             Cancel
//                         </Button>
//                     </Form>
//                 )}
//             </Formik>
//         </Paper>
//     );
// }

// export default UserForm;

// <TextField
//                             error={touched.name && !!errors.name}
//                             helperText={touched.name ? errors.name : null}
//                             name="name"
//                             label="Name"
//                             variant="outlined"
//                             fullWidth
//                             value={values.name}
//                             onChange={handleChange}
//                             onBlur={handleBlur}
//                         />
//                         <TextField
//                             error={touched.surname && !!errors.surname}
//                             helperText={touched.surname ? errors.surname : null}
//                             name="surname"
//                             label="Surname"
//                             variant="outlined"
//                             fullWidth
//                             value={values.surname}
//                             onChange={handleChange}
//                             onBlur={handleBlur}
//                         />
//                         <TextField
//                             error={touched.email && !!errors.email}
//                             helperText={touched.email ? errors.email : null}
//                             name="email"
//                             label="Email"
//                             variant="outlined"
//                             fullWidth
//                             value={values.email}
//                             onChange={handleChange}
//                             onBlur={handleBlur}
//                         />

//   <form onSubmit={onFormSubmit}>
// <TextField
// name="name"
// label="Name"
// variant="outlined"
// fullWidth
// value={values.name}
// onChange={onInputChange}
// onBlur={ onInputBlur}
// error={touched.name && !!errors.name}
// helperText={touched.name ? errors.name : null}


// />

// <TextField
// name="surname"
// label="Surname"
// variant="outlined"
// fullWidth
// value={values.surname}
// onChange={onInputChange}
// onBlur={ onInputBlur}
// error={ touched.surname && !!errors.surname}
// helperText={touched.surname ? errors.surname : null}
// />

// <TextField
// name="email"
// label="Email"
// variant="outlined"
// fullWidth
// value={values.email}
// onChange={onInputChange}
// onBlur={ onInputBlur}
// error={ touched.email && !!errors.email}
// helperText={touched.email ? errors.email : null}
// />

// <Button type="submit" color="primary" variant="contained" disabled={!isValid}>
// Save
// </Button>
// <Button to=".." component={NavLink}>
// Cancel
// </Button>
// </form>
// const {values, errors, touched, isValid, onInputChange, onInputBlur } = useForm(user, {validate})


