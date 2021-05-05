import React from 'react';

import Logo from '../logo.svg';
const Nav = () => {
    return (
    <div className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
        <a className="navbar-brand" href="#">
        <img src={Logo}   alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/>
            MiTienda.com
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Productos</a>
            </li>
        </ul>
        <span className="navbar-text">
            <button type="button" className="fas fa-cart-plus border-0">
                <span className="badge bg-secondary border-0"> 4 </span>
            </button>
        </span>
        </div>
    </div>
    </div>
    );
};

export default Nav;
