import React from 'react'
import CategoriesTable from '../components/CategoriesTable';
import { Outlet } from 'react-router-dom';
function CategoriesList() {
  

  return (
    <>
    <CategoriesTable />
    <Outlet />
</>
  )
}

export default CategoriesList