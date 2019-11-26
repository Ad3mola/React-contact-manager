import React from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

 function Header({branding}) {
    return (
        <header>
            <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
                <div className="container">
                    <a href="/" className="navbar-brand">{branding}</a>
                    <div>
                        <ul className="navbar-nav mr-auto">
                            <li className="navbar-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/contacts/add" className="nav-link">Add</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

Header.defaultProps = {
    branding: "My App"
}
Header.propTypes = {
    branding: PropTypes.string.isRequired
};

export default Header;