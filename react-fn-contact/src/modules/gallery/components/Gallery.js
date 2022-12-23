import React from 'react'
import useGallery from '../hooks/useGallery';
import AlbumsList from './AlbumsList';
import PhotosList from './PhotosList';

function Gallery() {
  const {albums, getAlbumPhotos, photos } = useGallery();
  return (
      <div className='row'>
       
          <AlbumsList list={albums} onNavigate={getAlbumPhotos} />
          <PhotosList list={photos} />
    </div>
  )
}

export default Gallery