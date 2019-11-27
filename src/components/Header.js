import React from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

 function Header({branding}) {
    return (
        <header>
            <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
                <div className="container">
                    <Link to="/" className="navbar-brand">{branding}</Link>
                    <div>
                    <ul className="navbar-nav mr-auto">
                        <SignedInLinks />
                        <SignedOutLinks />
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