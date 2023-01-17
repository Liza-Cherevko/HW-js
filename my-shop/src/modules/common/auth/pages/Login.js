import { Field, Form, Formik } from 'formik';
// import React, { useContext } from 'react';

// import { AuthContext } from '../providers/AuthProvider';
import { Navigate } from 'react-router-dom';
import { Button, Paper, TextField, Box, MenuItem  } from '@mui/material';
import loginValidationSchema from '../validation/loginValidationSchema';
import useAuth from '../hooks/useAuth';
import '../../../../App.css'

const initialValues = { username: '', password: '', role: 'admin' };

function Login() {
    const auth = useAuth();
    const roles = [
        {
            value: 'user',
            label:'user'
        },
        {
            value: 'admin',
            label:'admin'
        }
    ]
    function onSubmit(values) {
        auth.login(values.username, values.password, values.role);
    }

    return (
        <div className='container'>
            <h6 className='login-txt'>Login page</h6>
                 <Paper sx={{ marginTop: '20px' }}>
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={loginValidationSchema}
        >
            {(props) =>
                console.log(props) || (
         <Box
        sx={{
        display: 'flex',
        flexDirection: 'column',
        '& .MuiTextField-root': { width: '25ch' },
      }}>
                            <Form>
                            <div className='form'>
                        {/* {auth.isAuthorized && <Navigate to="/" />}
                                    {JSON.stringify(auth.user)} */}
     
                        <TextField name="username" label="Name" margin="normal"/>
                       <br/>
                        <TextField name="password" label="Password"  margin="normal"/>
                        <br/>
                      <TextField name="role" margin="normal" select label="Select role" >
                     
                                        {roles.map((option) => (
                     <MenuItem key={option.value} value={option.value}>
                              {option.label}
                     </MenuItem>
                                        ))} 
                     </TextField>
                        <br/>
                        <Button   type="submit"  color="primary" variant="contained" margin="dense">Login </Button>
                       </div>
                
                            </Form>
                           </Box>
                   
                )
            }
            </Formik>
            </Paper>
   </div>
    );
}

export default Login;