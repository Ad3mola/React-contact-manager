import React from 'react'
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

 function Header({branding}) {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-danger mb-3 py-0">
                <div className="container">
                    <a href="/" className="navbar-brand ">{branding}</a>
                    <div>
                        <ul className="navbar-nav mr-auto">
                            <li className="navbar-item">
                                <Link to="/" className="nav-link"> <i className=" fa fas fa-home"></i> Home</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/contact/add" className="nav-link"><i className=" fa fas fa-plus"></i> Add</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/about" className="nav-link"><i className=" fa fas fa-question"></i> About</Link>
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