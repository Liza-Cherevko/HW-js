import { Container } from '@mui/material'
import { Routes, Route } from 'react-router-dom';
 import './App.css';
import Circle from './Circle';
import MainNavigation from './modules/common/components/MainNavigation';
import Home from './modules/home/pages/Home';
import UserForm from './modules/users/pages/UserForm';
import UserList from './modules/users/pages/UserList';
import Users from './modules/users/pages/Users';
import Moveable from './Moveable';
import Square from './Square';

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

        // <>
        //     <Moveable render={({ x, y }) => <Circle x={x} y={y} />} />   
        //       <Moveable>{(position) => <Square {...position} />}</Moveable>  
        //      <Circle x={100} y={100} />
        //      <Square x={50} y={50} />
        // </>
       
  );
}

export default App;
