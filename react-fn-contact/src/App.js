import './App.css';

import { Navigate, Route, Routes } from 'react-router-dom';

import Gallery from './modules/gallery/components/Gallery';
import GalleryAlbum from './modules/gallery/components/GalleryAlbum';
import GalleryAlbumId from './modules/gallery/components/GalleryAlbumId';
import Navigation from './modules/common/components/Navigation';
import Post from './modules/posts/Post';
import Users from './modules/users/components/Users';
import {useState} from 'react'

function App() {
  const [page, setPage]= useState('gallery')
  return (
    <div className='container'>
  
      <Navigation page={page} navigate={setPage} />
      {/* {page === 'users' ? <Users /> : null}
      {page === 'posts' ? <Post /> : null}
      { page === 'gallery' ? <Gallery/> : null} */}

      <Routes>
      <Route path='/'  element={ <Navigate to="/users"/>} />
        <Route path='/users' element={<Users />} />
        <Route path='/posts' element={<Post />} />

        <Route path='/gallery' element={<Gallery />}>
               <Route path=':albumId' element={<GalleryAlbum />} />
       </Route>
      </Routes>
    </div>
  );
}

export default App;


