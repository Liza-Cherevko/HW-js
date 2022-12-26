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
import React from 'react';
import useUsersList from '../hooks/UseUsersList';

function UserList() {
  const {list, deleteUser} = useUsersList()
  return (
    <div>
      <TableContainer component={Paper} sx={{marginTop:'20px'}}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Sername</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((item) => (
           <TableRow key={item.id}>
           <TableCell>{item.name}</TableCell>
           <TableCell align="right">{item.surname}</TableCell>
           <TableCell align="right">{item.email}</TableCell>
           <TableCell align="right">
            <Button variant="outlined" to={item.id} component={NavLink}>Edit</Button>
            <Button
            variant="outlined"
             color="error"
             onClick={() => deleteUser(item.id)}>
              Delete</Button>
           </TableCell>
         </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default UserList