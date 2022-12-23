import React from 'react'
import AlbumListItem from './AlbumListItem'

function AlbumList({list, onNavigate}) {
    return (
        <div className='three columns'>
            <ul>
                {list.map((item) => (<AlbumListItem key={item.id} album={item} onNavigate={ onNavigate} />))}
            </ul>
      </div>
    )
  }

export default AlbumList