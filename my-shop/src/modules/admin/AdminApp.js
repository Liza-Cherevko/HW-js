import React from 'react'
import ProtectedRoute from '../common/auth/components/ProtectedRoute';
import { Outlet } from 'react-router-dom'
import TopBar from './common/components/TopBar';
import LeftNav from './common/components/LeftNav';
import { Box } from '@mui/material';

function AdminApp() {
  return (
      <div>
      <ProtectedRoute roles={['admin', 'sales']}>
        <TopBar />
        <LeftNav />
        <Box maxWidth='lg' sx={{ mt: 10}}>
        <Outlet />
        </Box>
        
            </ProtectedRoute>
    </div>
  )
}

export default AdminApp