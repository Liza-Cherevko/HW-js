
import { useEffect, useState } from 'react';
import albumService from '../services/albumService'
import AlbumsList from './AlbumsList';

function Albums() {
  const [albums, setAlbums]= useState([])

  useEffect(() => {
    albumService.getList().then(setAlbums)
   },[])


  
  return (
    <div>
       <AlbumsList albums={albums}/>
    </div>
  )
}

export default Albums
