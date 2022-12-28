// import './App.css';
// import {Route, Routes } from 'react-router-dom'
// import Users from './modules/users/components/Users';
// import MainNavigation from './modules/common/components/MainNavigation';
// import Home from './modules/home/pages/Home';
// import UserForm from './modules/users/components/UserForm';
// import UserList from './modules/users/components/UserList';



// function App() {
//   return (
//     <div className='container'>
      
//       {/* <Routes>
//              <Route path="/users" element={<Users />}>
        
//              </Route>
//         </Routes> */}
//         {/* <MainNavigation/> */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="users" element={<Users />}>
//           <Route path='' element={<UserList />}></Route>
//           <Route path=':id' element={ <UserForm/>}></Route>
//       </Route>
//      </Routes>
//   </div>
//   );
// }

// export default App;
import './App.css';
import ContactsList from './component/pages/ContactsList';
import Navbar from "./component/layout/Navbar";
import UserForm from './component/pages/UserForm';
import EditUser from './component/pages/EditUser';
import Home from './component/home/pages/Home'
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { Navigate, Route, Routes} from "react-router-dom";
import Users from './component/pages/Users';
function App() {
  
        return (
     
              <div className="container">
                  <Navbar/>
                  <Routes>
                    <Route path="/" element={<Navigate to="Contact-list" />} /> 
                   
                       <Route exact path="/Contact-list" element={<ContactsList/>}/>
                      <Route exact path="/add" element={<UserForm/>}/>
                      <Route exact path="/user/edit/:id" element={<UserForm/>}/>
                     
                  </Routes>
              </div>
       
      );
  }

export default App;

