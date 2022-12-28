import {NavLink} from 'react-router-dom';
import React from 'react'

function MainNavigation() {
    return (<div className='row'>
        <div>
            <h6>
                My supper App
            </h6>
            <button  component={NavLink} to='users'>Users</button>
          
       </div>
  </div>)
}

export default MainNavigation