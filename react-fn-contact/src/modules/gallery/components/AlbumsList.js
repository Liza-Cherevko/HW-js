import React from 'react'
import useAlbums from '../hooks/useAlbums'
import AlbumsListItem from './AlbumsListItem'

function AlbumsList() {
  const albums = useAlbums();
  return (
      <div className='three columns'>
          <ul>
        {albums.map((item) => (<AlbumsListItem key={item.id} album={item} onNavigate={() => { }} />))}
          </ul>
    </div>
  )
}

export default AlbumsList