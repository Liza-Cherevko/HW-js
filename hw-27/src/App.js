import { Container } from '@mui/material'
import { Routes, Route } from 'react-router-dom';
 import './App.css';
import MainNavigation from './modules/common/components/MainNavigation';
import Home from './modules/home/pages/Home';
import UserForm from './modules/users/pages/UserForm';
import UserList from './modules/users/pages/UserList';
import Users from './modules/users/pages/Users';

function App() {
  return (
    <Container maxWidth='sm' >
      <MainNavigation/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="users" element={<Users />}>
          <Route path='' element={<UserList />}></Route>
          <Route path=':id' element={ <UserForm/>}></Route>
      </Route>
     </Routes>
    
    </Container>
  );
}

export default App;
