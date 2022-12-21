import React from 'react'

function PhotosItem(  { photos: { title, thumbnailUrl, albumId }} ) {
 
   
  return (
    <div id={albumId}>
          <div>{title}</div>
      <img src={thumbnailUrl} alt="img"  />
    </div>
  )
}

export default PhotosItem

