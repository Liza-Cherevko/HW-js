import React from 'react'
import { NavLink } from 'react-router-dom';
function UsersListItem({ user: {id, name, surname, email }, onDelete, onEdit }) {
  return (
    <div className='row'>
          <div className='three columns'>{name}</div>
          <div className='three columns'>{surname}</div>
          <div className='three columns'>{email}</div>
          <div className='three columns'>
              <button onClick={()=> onEdit(id)}  component={NavLink}>Edit</button>
              <button onClick={()=> onDelete(id)}>Delete</button>
          </div>
    </div>
  )
}

export default UsersListItem
