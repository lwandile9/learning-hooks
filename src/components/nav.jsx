import React from "react";
import { Link } from 'react-router-dom'; 
const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold  fs-3" href="google">Code Heads Membership</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto fw-bold fs-3">
            <li className="nav-item">
              <Link className="nav-link" to='/home'>Home</Link>
            </li>
           
            <li className="nav-item">
              <Link className="nav-link" to='/about'>About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/profile'>Profile</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
