import {useState} from 'react'
import './App.css';
import Albums from './modules/albums/components/Albums';
import Photos from './modules/photos/components/Photos';
import Navigation from './modules/common/components/Navigation';

function App() {

  const [page, setPage]= useState('albums', 'photos' )


  return (
    <div className="container">
      {/* <Navigation page={page} navigate={setPage} />
      {page === 'albums' ? <Albums /> : null}
      { page === 'photos' ? <Photos/> : null} */}
      <div className='wrap'>
      <Albums />
      <Photos/>
    </div>
    </div>
  );
}

export default App;
