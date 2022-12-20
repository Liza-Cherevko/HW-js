import React, { useEffect, useState } from 'react'
import photoService from '../services/photoService';
import PhotosList from './PhotosList';

function Photos() {
  const [photos, setPhotos] = useState([]);
  useEffect(() => { 
    photoService.getList().then(setPhotos)
  })

  
  return (
    <div>
      <PhotosList photos={ photos} />
    </div>
  )
}

export default Photos
