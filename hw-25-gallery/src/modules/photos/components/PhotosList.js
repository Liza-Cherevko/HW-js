import React from 'react'
import PhotosItem from './PhotosItem'




function PhotosList({ photos }) {

  return (
    <div>
      {photos.map((item) => (<PhotosItem key={item.id} photos={item}  />))}
         
    </div>
  )
}

export default PhotosList
{/* // photo => ({ img: photo.url, thumb: photo.thumbnailUrl } */}