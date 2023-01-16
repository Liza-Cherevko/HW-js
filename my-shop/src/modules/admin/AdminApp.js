import React from 'react'
import ProtectedRoute from '../common/auth/components/ProtectedRoute';
import { Outlet } from 'react-router-dom'

function AdminApp() {
  return (
      <div>
          <ProtectedRoute roles={['admin', 'sales']}>
                <Outlet />
            </ProtectedRoute>
    </div>
  )
}

export default AdminApp