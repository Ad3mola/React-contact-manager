import React from 'react';
import {Link} from 'react-router-dom'

const SignedInLinks = () => {
    return (
        <>
        <li className="navbar-item">
            <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="navbar-item">
            <Link to="/contacts/add" className="nav-link">Add</Link>
        </li>
        <li className="navbar-item">
            <Link to="/contacts/edit" className="nav-link">Edit</Link>
        </li>
    </>
    );
}

export default SignedInLinks;
