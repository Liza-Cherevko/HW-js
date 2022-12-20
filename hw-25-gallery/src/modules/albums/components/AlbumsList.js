import React from 'react'
import AlbumsListHeader from './AlbumsListHeader'
import AlbumsListItem from './AlbumsListItem'

function AlbumsList({ albums}) {
  return (
      <div>
          <AlbumsListHeader/>
          {albums.map((item) => (<AlbumsListItem key={item.id} album={item} />))}
        
    </div>
  )
}

export default AlbumsList
