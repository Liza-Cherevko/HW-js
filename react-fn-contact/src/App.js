import './App.css';
import {useState} from 'react'
import Navigation from './modules/common/components/Navigation';
import Users from './modules/users/components/Users';
import Post from './modules/posts/Post';
import Gallery from './modules/gallery/components/Gallery';

function App() {
  const [page, setPage]= useState('gallery')
  return (
    <div className='container'>
  
      <Navigation page={page} navigate={setPage} />
      {page === 'users' ? <Users /> : null}
      {page === 'posts' ? <Post /> : null}
      { page === 'gallery' ? <Gallery/> : null}
    </div>
  );
}

export default App;
