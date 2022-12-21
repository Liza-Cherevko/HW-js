import usePhotos from '../hooks/usePhotos'
import PhotosList from './PhotosList';

function Photos() {
  const { photo, albumItemId: {userId } } = usePhotos();

  return (
    <div>
      <PhotosList photo={photo} albumItemId={userId } />
    </div>
  )
}

export default Photos