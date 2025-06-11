import "./index.css";
import { FaBars } from "react-icons/fa6";
import { FaX } from "react-icons/fa6";
import { useState } from "react";

function Header() {
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);

  return (
    <header className="header">
      <div className="container-xxl">
        <nav className="navbar">
          <div className="navbar__logo">
            <a href="#">
              <img src="/img/logo.png" alt="Logo" />
            </a>
          </div>
          <div className="navbar__menu">
            <ul className="navbar__menu-list">
              <li className="navbar__menu-item">
                <a href="filmes">Filmes</a>
              </li>
              <li className="navbar__menu-item">
                <a href="series">Séries</a>
              </li>
            </ul>

            <div
              className="navbar__menu--mobile"
              onClick={() => setOffcanvasOpen(true)}
              style={{ cursor: "pointer" }}
            >
              <FaBars color="#fff" />
            </div>
          </div>
          <div
            className={`navbar__menu--offcanvas${offcanvasOpen ? " open" : ""}`}
          >
            <ul className="navbar__menu-list--offcanvas">
              <li className="navbar__menu-item--offcanvas">
                <a href="filmes">Filmes</a>
              </li>
              <li className="navbar__menu-item--offcanvas">
                <a href="series">Séries</a>
              </li>
            </ul>
            <div
              className="navbar__menu--offcanvas-close"
              onClick={() => setOffcanvasOpen(false)}
              style={{ cursor: "pointer" }}
            >
              <FaX color="#fff" />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
