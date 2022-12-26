import React from 'react'
import { Outlet } from 'react-router-dom';
import useGallery from '../hooks/useGallery';
import AlbumsList from './AlbumsList';
import PhotosList from './PhotosList';

function Gallery() {
  const {albums, getAlbumPhotos, photos } = useGallery();
  return (
    <div className='row'>
      <AlbumsList />
      <div className='nine columns'>
        <div>Place for Gallery album
           <Outlet/>
         </div>
      </div>
    </div>
  )
}

export default Gallery