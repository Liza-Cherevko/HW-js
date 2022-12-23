import './App.css';
import {useState} from 'react'
import Navigation from './modules/common/components/Navigation';
import Users from './modules/users/components/Users';
import Post from './modules/posts/Post';
import Gallery from './modules/gallery/components/Gallery';
import { Navigate, Route, Routes } from 'react-router-dom';

function App() {
  const [page, setPage]= useState('gallery')
  return (
    <div className='container'>
  
      <Navigation page={page} navigate={setPage} />
      {/* {page === 'users' ? <Users /> : null}
      {page === 'posts' ? <Post /> : null}
      { page === 'gallery' ? <Gallery/> : null} */}
      <Routes>
      <Route path='/' exact element={ <Navigate to="/users"/>} />
        <Route path='/users' element={<Users />} />
        <Route path='/posts' element={<Post />} />
        <Route path='/gallery' element={<Gallery />} />
       
      </Routes>
    </div>
  );
}

export default App;


