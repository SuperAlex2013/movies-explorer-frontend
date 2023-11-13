import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <section className="footer__container">
        <h2 className="footer__heading">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </h2>
        <nav className="footer__nav">
          <p className="footer__copyright">© 2023</p>
          <ul className="footer__list page__list">
            <li>
              <a
                href="https://practicum.yandex.ru/"
                className="footer__link page__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Яндекс.Практикум
              </a>
            </li>
            <li>
              <a
                href="https://github.com/SuperAlex2013"
                className="footer__link page__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </footer>
  );
}

export default Footer;
