import React, { useEffect, useState } from 'react';

import { useAlbums } from '../components/hooks/useAlbums';
import usePhotos from '../components/hooks/usePhotos';
import AlbumList from './AlbumList';
import PhotoList from './PhotosList';

function Gallery() {
    const [albumId, setAlbumId] = useState(null);

    const albums = useAlbums();
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
          <PhotoList list={photos} />
    </div>
  )
}

export default Gallery