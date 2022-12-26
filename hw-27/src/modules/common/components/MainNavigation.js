import React from 'react'
import { Typography, AppBar, Toolbar, Button } from '@mui/material';
import {NavLink} from 'react-router-dom';
function MainNavigation() {
    return (<AppBar position="static">
        <Toolbar>
            <Typography variant='h6' sx={{ flexGrow: 1 }}>
                My supper App
            </Typography>
            <Button color="inherit" component={NavLink} to='users'>Users</Button>
          
       </Toolbar>
  </AppBar>)
}

export default MainNavigation