
import PhotosItem from './PhotosItem'

function PhotosList({ photo, albumItemId  }) {

   

  return (
    <div>
      
      {photo.map((item) => (
        <PhotosItem key={item.id} photos={item} albumItemId={albumItemId}  />
          ))}

    </div>
  )
}

export default PhotosList
