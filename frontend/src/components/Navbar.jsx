import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/ScreenLogo.png";

import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="nav-bar">
      <div className="burger-menu">
        <div className="burger">
          <button
            type="button"
            className="btn__burger"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "X" : "Ξ"}
          </button>
          {isOpen && (
            <nav className="navigation">
              <ul>
                <li>
                  <Link to="/consommation">Consommation</Link>
                </li>
                <li>
                  <Link to="/conseils">Conseils</Link>
                </li>
                <li>
                  <Link to="/liens">Liens</Link>
                </li>
                <li>
                  <Link to="/">Retour</Link>
                </li>
              </ul>
            </nav>
          )}
        </div>

        <img src={Logo} className="App-logo" alt="logo" />
      </div>
    </div>
  );
}

export default Navbar;
