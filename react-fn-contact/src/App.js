import './App.css';
import {useState} from 'react'
import Navigation from './modules/common/components/Navigation';
import Users from './modules/users/components/Users';
import Post from './modules/posts/Post';

function App() {
  const [page, setPage]= useState('posts')
  return (
    <div className='container'>
  
      <Navigation page={page} navigate={setPage} />
      {page === 'users' ? <Users /> : null}
      { page === 'posts' ? <Post/> : null}
    </div>
  );
}

export default App;
