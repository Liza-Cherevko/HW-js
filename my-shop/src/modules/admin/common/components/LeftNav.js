import React from 'react'
import { Drawer, List, Divider, ListItemButton, ListItemIcon, ListItemText, Toolbar,Typography } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CategoryIcon from '@mui/icons-material/Category';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import { NavLink } from 'react-router-dom';
function LeftNav() {
  return (
    <Drawer variant="permanent">
            <Toolbar
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    px: [1],
                }}
            >
                <Typography component="h1" variant="h6" color="inherit" noWrap>
                    My Shop Admin
                </Typography>
            </Toolbar>
            <Divider />
            <List component="nav">
              <ListItemButton component={NavLink} to='/admin'>
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
              </ListItemButton>
              
              <ListItemButton component={NavLink} to='/admin/categories'>
                    <CategoryIcon>
                        <DashboardIcon />
                    </CategoryIcon>
                    <ListItemText primary="Categories" />
              </ListItemButton>
              
              <ListItemButton component={NavLink} to='/admin/products'>
                    <ProductionQuantityLimitsIcon>
                        <DashboardIcon />
                    </ProductionQuantityLimitsIcon>
                    <ListItemText primary="Products" />
              </ListItemButton>
              
               
                <Divider sx={{ my: 1 }} />
            </List>
        </Drawer>
  )
}

export default LeftNav