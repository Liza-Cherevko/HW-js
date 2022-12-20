import React from 'react'

function AlbumsListItem({ album: {title} }) {
    return (
      <div className='row'>
            <div className='three column'>{title}</div>
      </div>
    )
}

export default AlbumsListItem
