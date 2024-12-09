import React from "react";

function Navbar() {
  return (
    <header id="header" className="header d-flex align-items-center sticky-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <a href="index.html" className="logo d-flex align-items-center">
          <img src="assets/img/brandLogo.jpg" alt />
          {/* Uncomment the line below if you also wish to use text logo */}
          <h1 class="sitename">DuoSoft</h1> 
        </a>
        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <a href="#hero" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#team">Team</a>
            </li>

            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list" />
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
