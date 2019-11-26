import React from 'react'
import PropTypes from 'prop-types';

 function Header({branding}) {
    return (
        <header>
            <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
                <div className="container">
                    <a href="/" className="navbar-brand">{branding}</a>
                    <div>
                        <ul className="navbar-nav mr-auto">
                            <li className="navbar-item">
                                <a href="/" className="nav-link">Home</a>
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