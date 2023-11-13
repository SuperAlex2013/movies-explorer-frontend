import './AboutMe.css';
import avatar from 'images/avatar.jpg';

function AboutMe() {
  return (
    <section className="about-me" id="AboutMe">
      <h2 className="about-me__heading">Студент</h2>
      <div className="about-me__info">
        <div className="about-me__text">
          <h3 className="about-me__title">Виталий</h3>
          <p className="about-me__subtitle">Фронтенд-разработчик, 30 лет</p>
          <p className="about-me__desc">
            Я&nbsp;родился и&nbsp;живу в&nbsp;Саратове, закончил факультет
            экономики СГУ. У&nbsp;меня есть жена и&nbsp;дочь. Я&nbsp;люблю
            слушать музыку, а&nbsp;ещё увлекаюсь бегом. Недавно начал кодить. С
            2015 года работал в&nbsp;компании &laquo;СКБ Контур&raquo;. После
            того, как прошёл курс по&nbsp;веб-разработке, начал заниматься
            фриланс-заказами и ушёл с&nbsp;постоянной работы.
          </p>
          <a
            href="https://github.com/SuperAlex2013"
            className="about-me__link page__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>
        <img className="about-me__avatar" src={avatar} alt="Фото студента" />
      </div>
      <h2 className="about-me__portfolio">Портфолио</h2>
      <ol className="about-me__portfolio-list page__list">
        <li className="about-me__portfolio-item">
          <a
            href="https://github.com/SuperAlex2013/how-to-learn"
            className="about-me__portfolio-link page__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Статичный сайт
          </a>
        </li>
        <li className="about-me__portfolio-item">
          <a
            href="https://github.com/SuperAlex2013/russian-travel"
            className="about-me__portfolio-link page__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Адаптивный сайт
          </a>
        </li>
        <li className="about-me__portfolio-item">
          <a
            href="https://github.com/SuperAlex2013/react-mesto-api-full-gha"
            className="about-me__portfolio-link page__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Одностраничное приложение
          </a>
        </li>
      </ol>
    </section>
  );
}

export default AboutMe;
