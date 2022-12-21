import { useEffect, useState } from 'react';

import photoService from '../services/photoService';
import albumService from '../../albums/services/albumService';
export default function usePhotos() {
    
    const [photo, setPhotos] = useState([]);
 
    
    useEffect(() => {
        photoService
            .getList(photo)
            .then(setPhotos)
           
    }, []);

    const [albumItemId , setAlbumId] = useState([]);
 
    
    useEffect(() => {
        albumService
            .getList(albumItemId)
            .then((data) => { setAlbumId(data); albumItemId(data[0].id )} )
           
    }, []);
  
    return {
        photo, albumItemId
      
    }
}
