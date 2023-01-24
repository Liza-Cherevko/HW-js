import React from 'react'
import { IconButton } from '@mui/material';
import { NavLink, Outlet } from 'react-router-dom';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CategoriesProvider from '../../../common/categories/providers/CategoriesProvider';
function Categories() {
  return (
    <div>
<CategoriesProvider>
            <Outlet />
            <IconButton component={NavLink} to="new">
                <AddCircleOutlineIcon />
               </IconButton>
        </CategoriesProvider>
    </div>
  )
}

export default Categories
