import React from 'react';

const Header = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light headecolor">
            <div className="container-fluid navsection">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a to="/" className="nav-link active navhead navitem" aria-current="page">Velocitai Digital</a>
                        </li>
                       
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header
