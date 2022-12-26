import React from 'react'
import { NavLink } from 'react-router-dom'

function AlbumsListItem({ album: { id, title} }) {
  return (<ul>
     <NavLink to={'/gallery/'+id}>  {title }</NavLink>
  </ul> )
}

export default AlbumsListItem