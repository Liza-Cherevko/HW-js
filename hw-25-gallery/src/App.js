import './App.css';
import Albums from './modules/albums/components/Albums';
import Photos from './modules/photos/components/Photos';


function App() {
 
  const albums = useAlbums();
  const photos = usePhotos(albumId);


  return (
    <div className="container">
      <div className='wrap'>
        <Albums   />
        <Photos/>
    </div>
    </div>
  );
}

export default App;
