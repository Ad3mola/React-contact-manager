import React from 'react';
import {Link} from 'react-router-dom'

const SignedOutLinks = () => {
    return (
        <>
        <li className="navbar-item">
            <Link to="/signup" className="nav-link">SignUp</Link>
        </li>
        <li className="navbar-item">
            <Link to="/signin" className="nav-link">Login</Link>
        </li>
    </>
    );
}

export default SignedOutLinks;
