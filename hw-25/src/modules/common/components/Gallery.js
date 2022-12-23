import React, { useEffect, useState } from 'react'
import usePhotos from '../components/hooks/usePhotos';

import AlbumList from '../components/AlbumList';
import useAlbum from '../components/hooks/useAlbum';
import PhotosList from '../components/PhotosList'

function Gallery() {
    const [albumId, setAlbumId] = useState(null);

    const albums = useAlbum();
    const photos = usePhotos(albumId);

    useEffect(() => {
        if (!albums.length) return
        setAlbumId(albums[0].id)
     }, [albums])

console.log(photos)
  return (
      <div className='row'>
          { albumId}
          <AlbumList list={albums} onNavigate={setAlbumId} />
          <PhotosList list={photos} />
    </div>
  )
}

export default Gallery