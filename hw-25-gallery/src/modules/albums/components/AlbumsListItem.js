import React from 'react'

function AlbumsListItem({ album: {title, id} }) {
    return (
      <div className='row'>
        <div className='three column'>{title} </div>
        <input type="hidden" defaultValue={id} name="id" />
      </div>
    )
}

export default AlbumsListItem
