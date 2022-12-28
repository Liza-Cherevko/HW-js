import React from 'react'
import { NavLink } from 'react-router-dom';


function Navigation() {
  return (
    <>
          <div to="" component={NavLink}>
                List
        </div>
            <div to="new" component={NavLink}>
                   Add
             </div>
          <div to="/" component={NavLink}>
                    Home
       </div>
</>
  )
}

export default Navigation
