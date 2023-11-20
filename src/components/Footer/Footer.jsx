import React from 'react';
import './Footer.css';

const FooterLink = ({ href, children }) => (
  <li>
    <a
      href={href}
      className="page__link footer__link"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  </li>
);

function Footer() {
  return (
    <footer className="footer__base">
      <div className="footer__container">
        <h2 className="footer__heading">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </h2>
        <nav className="footer__nav">
          <p className="footer__copyright">© 2023</p>
          <ul className="page__list footer__list">
            <FooterLink href="https://practicum.yandex.ru/">Яндекс.Практикум</FooterLink>
            <FooterLink href="https://github.com/superAlex2013">Github</FooterLink>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
