import { NavLink } from 'react-router-dom';
import React from 'react';
import useUser from '../../common/auth/hooks/useUser';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';



function Landing() {
    const user = useUser();

    return (
     
 
                <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
         
          <Toolbar >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
            
            </IconButton>
             <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
             {JSON.stringify(user)}
                <br/>
            Landing
            </Typography>
             {/* <NavLink to="/auth">Login</NavLink>
                    <NavLink to="/admin">Admin Panel</NavLink> */}
            <Button color="inherit" component={NavLink} to='/auth'>Login</Button>
          </Toolbar>
       
        </AppBar>
      </Box>

        
    );
}

export default Landing;