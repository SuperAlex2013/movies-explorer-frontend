import './Promo.css';

function Promo() {
  return (
    <section className="promo">
      <h1 className="promo__title">
        Учебный проект студента факультета Веб-разработки.
      </h1>
      <nav className="promo__nav">
        <ul className="promo__list page__list">
          <li>
            <a href="#AboutProject" className="promo__link page__link">
              О проекте
            </a>
          </li>
          <li>
            <a href="#Techs" className="promo__link page__link">
              Технологии
            </a>
          </li>
          <li>
            <a href="#AboutMe" className="promo__link page__link">
              Студент
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Promo;
