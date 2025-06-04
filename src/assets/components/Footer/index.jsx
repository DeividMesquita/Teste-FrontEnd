import "./index.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container-xxl">
        <div className="row">
          <div className="footer__content">
            <div className="footer__content--logo">
              <a href="#">
                <img src="/img/logo.png" alt="Logo" />
              </a>
            </div>
            <div className="footer__list">
              <ul className="footer__list--links">
                <li>
                  <a href="#">Sobre</a>
                </li>
                <li>
                  <a href="#">Contato</a>
                </li>
                <li>
                  <a href="#">Suporte</a>
                </li>
              </ul>
            </div>
            <div className="footer__list">
              <ul className="footer__list--links">
                <li>
                  <a href="#">Adicione um Filme</a>
                </li>
                <li>
                  <a href="#">Adicione uma Série</a>
                </li>
                <li>
                  <a href="#">Discussões</a>
                </li>
              </ul>
            </div>
            <div className="footer__list">
              <ul className="footer__list--links">
                <li>
                  <a href="#">Termos de Uso</a>
                </li>
                <li>
                  <a href="#">Política de Privacidade</a>
                </li>
                <li>
                  <a href="#">Diretrizes</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
