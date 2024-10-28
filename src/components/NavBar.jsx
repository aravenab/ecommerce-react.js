import React from 'react';
import CartWidget from './CartWidget.jsx';

const NavBar = () => {
    return (
        <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Allegro</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#home">Inicio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">New Arrivals</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#services"> Equipamiento </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">Sale</a>
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