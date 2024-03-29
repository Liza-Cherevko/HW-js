import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

import { NavLink } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import { useDispatch, useSelector } from 'react-redux';
import selectList from '../../../store/selectors/user'
import { deleteUser } from '../../../store/actions/user';


function UsersList() {
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false);
    const users = useSelector(selectList)

   

    // function onDeleteClick(e) { 
    //    e.stopPropagation()
    //     const action = deleteUser(users)
    //     dispatch(action)
       
    // }

    useEffect(() => {
        setIsLoading(true)
        setTimeout(() => {setIsLoading(false) },500)
    },[])


    return (
      <div>
 {isLoading ? 
(    <ClipLoader
        color={'#0053b1'}
        loading={isLoading}
        size={80}
      />)
             : (
      <TableContainer component={Paper} sx={{ marginTop: '20px' }}>
          <Table aria-label="simple table">
              <TableHead>
                  <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell align="right">Surname</TableCell>
                      <TableCell align="right">Email</TableCell>
                      <TableCell align="right">Actions</TableCell>
                  </TableRow>
              </TableHead>
              <TableBody>
                  {users.map((item) => (
                      <TableRow key={item.id}>
                          <TableCell>{item.name}</TableCell>
                          <TableCell align="right">{item.surname}</TableCell>
                          <TableCell align="right">{item.email}</TableCell>
                          <TableCell align="right">
                              <Button
                                  variant="outlined"
                                  to={item.id}
                                  component={NavLink}
                              >
                                  Edit
                              </Button>
                              <Button
                                  variant="outlined"
                                  color="error"
                                  onClick={()=>dispatch(deleteUser(item.id))}
                              >
                                  Delete
                              </Button>
                          </TableCell>
                      </TableRow>
                  ))}
              </TableBody>
             
          </Table>
            </TableContainer>
            )}
            </div>
  );
}

export default UsersList;