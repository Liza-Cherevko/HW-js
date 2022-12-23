import React from 'react'

function PhotosListItem({ photo: {thumbnailUrl} }) {
  return (
      <div><img src={thumbnailUrl }  className="three column"/></div>
  )
}

export default PhotosListItem