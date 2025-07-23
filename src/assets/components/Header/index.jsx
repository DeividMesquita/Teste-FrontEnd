import "./index.css";
// importando os icones do react-icons
import { FaBars, FaX } from "react-icons/fa6";
import { useState } from "react";

function Header() {
  // Estado para controlar a abertura do offcanvas
  // useState é um hook do React que permite adicionar estado a componentes funcionais
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);

  return (
    <header className="header fixed-top">
      <div className="container-xxl">
        <nav className="navbar">
          <div className="navbar__logo">
            <button
              type="button"
              className="navbar__logo-btn"
              aria-label="Home"
              style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
            >
              <img src="/img/logo.png" alt="Logo" />
            </button>
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
              // on click, altera o estado do offcanvas para aberto
              // setOffcanvasOpen é uma função que altera o estado
              onClick={() => setOffcanvasOpen(true)}
              style={{ cursor: "pointer" }}
            >
              <FaBars color="#fff" />
            </div>
          </div>
          <div
            // classe condicional para adicionar a classe "open" se offcanvasOpen for true
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
              // ao clicar, altera o estado do offcanvas para fechado
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
