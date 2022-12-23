import React from 'react'

function AlbumListItem({ album: { id, title}, onNavigate }) {
    return (
        <div>
            <li onClick={()=>onNavigate(id)}> {title }</li>
      </div>
    )
  }

export default AlbumListItem