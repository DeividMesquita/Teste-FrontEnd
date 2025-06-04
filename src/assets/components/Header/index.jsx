import "./index.css";

function Header() {
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
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
