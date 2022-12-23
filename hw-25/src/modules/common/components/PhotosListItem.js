import React from 'react'

function PhotosListItem({ photo: {thumbnailUrl} }) {
  return (
      <div> <img src={thumbnailUrl }  className="three column" alt='photo'/></div>
  )
}
 


export default PhotosListItem