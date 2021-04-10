import React from 'react';
import './navbar.css';
import Logo from '../../assets/logo-green.png'
export default function MenuAppBar() {

  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark">
        <div className="navbar-collapse  dual-collapse2">
          <img src={Logo}/>
        </div>
    
    <div className="navbar-collapse dual-collapse2">
        <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
                <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Missions</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Solutions</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Problems</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">how it works</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Apendix</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Technology</a>
            </li>
        </ul>
    </div>
</nav>
    </>
  );
}
