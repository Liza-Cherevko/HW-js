
import { Link, Navigate} from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Button,  TextField, Box,  FormControlLabel, Grid, Checkbox, Typography, Select, Avatar, MenuItem   } from '@mui/material';
import { Form, Formik } from 'formik';
import loginValidationSchema from '../validation/loginValidationSchema';
import MyTextField from '../../form/form/MyTextField';
import MySelect from '../../form/form/MySelect';
import useAuth from '../hooks/useAuth';



const initialValues = { username: '', password: '', role:'admin' };
function Login() {
    const auth = useAuth();

    function onSubmit(values) {
            console.log('submit', values);
        auth.login(values.username, values.password, values.role);
    }
    return (
      <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={loginValidationSchema}
      >
      
      <Form>
      {auth.isAuthorized && <Navigate to="/" />}
          <Box
              sx={{
                  marginTop: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
              }}
          >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                  <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                  Sign in
              </Typography>
              <Box sx={{ mt: 1 }}>
                  <MyTextField
                      margin="normal"
                      fullWidth
                      label="Username"
                      name="username"
                      autoFocus
                  />
                  <MyTextField
                      margin="normal"
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
              />
              <MySelect name='role' fullWidth label='role'>
                <MenuItem value='admin'>Admin</MenuItem>
                <MenuItem value='user'>User</MenuItem>
              </MySelect>
                  <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                  >
                      Sign In
                  </Button>
                  <Button
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                  >
                 
                  </Button>
              </Box>
          </Box>
      </Form>
      </Formik>
              // <Formik
        //     initialValues={initialValues}
        //     onSubmit={onSubmit}
        //     validationSchema={loginValidationSchema}
        // >
        //     {(props) =>
        //         console.log(props) || (
        //             <Form>
        //                 {auth.isAuthorized && <Navigate to="/" />}
        //                 {JSON.stringify(auth.user)}
        //                 <Field name="username" placeholder="Name" />
        //                 <br />
        //                 <Field name="password" placeholder="Password" />
        //                 <br />
        //                 <Field name="role" placeholder="Role" />
        //                 <br />
        //                 <button type="submit">Login</button>
        //             </Form>
        //         )
        //     }
        // </Formik>
    )
}

export default Login;