import React from 'react';
import CartWidget from './CartWidget.jsx';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">Allegro</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <NavLink className="aLink nav-link"  to="/">Inicio</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="aLink nav-link" to="/category/mas vendidos">Mas Vendidos</NavLink>
                </li>
                <li className="nav-item">
                  <a className="aLink nav-link" to="/category/ofertas"> Ofertas </a>
                </li>
                <li className="nav-item">
                  <NavLink className="aLink nav-link" to="/category/nuevos">Nuevos </NavLink>
                </li>
                <li className="nav-item">
                  <CartWidget counter={3} />
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
};
export default NavBar;