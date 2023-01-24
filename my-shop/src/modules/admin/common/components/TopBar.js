import React from 'react'
import { AppBar, Toolbar, Typography, IconButton, } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import useUser from '../../../common/auth/hooks/useUser';
import { NavLink } from 'react-router-dom';
function TopBar() {
    const user = useUser()
  return (
    <AppBar position="absolute" >
    <Toolbar
      sx={{
        pr: '24px', // keep right padding when drawer closed
      }}
    >
      <Typography
        component="h1"
        variant="h5"
        color="inherit"
        noWrap
        sx={{ flexGrow: 1 }}
      >
        Dashboard
     </Typography>
     <Typography component="h6">{user.username} </Typography>
              <IconButton color="inherit" component={NavLink } to='/auth/logout'>
          <LogoutIcon />
      </IconButton>
    </Toolbar>
  </AppBar>
  )
}

export default TopBar