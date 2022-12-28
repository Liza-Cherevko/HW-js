import React from 'react'
import {Outlet }  from 'react-router-dom'
import Navbar from '../layout/Navbar';

function Users() {
  return (
      <div>
          <Navbar />
          <Outlet />
      </div>
  );
}

export default Users