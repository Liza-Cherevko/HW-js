import React from 'react'

function PhotosItem({ photos: {title, url, thumbnailUrl } }) {
  return (
    <div>
          <div className=''>{title} {url} { thumbnailUrl} </div>
    </div>
  )
}

export default PhotosItem
