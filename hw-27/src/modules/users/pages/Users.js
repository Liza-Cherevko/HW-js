import React from 'react'
import {Outlet }  from 'react-router-dom'
import UserNavigation from '../components/UserNavigation'
function Users() {
  return (
      <div> 
    <UserNavigation/>
     <Outlet/>
      </div>
  )
}

export default Users