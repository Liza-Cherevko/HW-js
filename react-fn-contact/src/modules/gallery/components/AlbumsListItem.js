import React from 'react'

function AlbumsListItem({ album: { id, title}, onNavigate }) {
  return (
      <div>
          <li onClick={()=>onNavigate(id)}> {title }</li>
    </div>
  )
}

export default AlbumsListItem