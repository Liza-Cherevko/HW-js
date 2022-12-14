import React from 'react';
import {Link, NavLink} from "react-router-dom";

const Navbar = () => {

    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/Contact-list">Contact List</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/home">Home</NavLink>
                            </li>
                        </ul>
                    </div>
                    <Link className="btn btn-outline-light w-25" to="/add">Add contact</Link>
                </div>
            </nav>
        </div>
    );

}

export default Navbar;