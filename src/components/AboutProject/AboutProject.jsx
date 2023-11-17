import './AboutProject.css';

function AboutProject() {
  return (
    <section className="about-project" id="AboutProject">
      <h2 className="about-project__heading">О проекте</h2>
      <ul className="about-project__list page__list">
        <li className="about-project__item">
          <h3 className="about-project__stage-header">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__stage-desc">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </li>
        <li className="about-project__item">
          <h3 className="about-project__stage-header page__title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__stage-desc">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <div className="about-project__table">
        <p className="about-project__table-text">1 неделя</p>
        <p className="about-project__table-text">4 недели</p>
        <p className="about-project__table-text">Back-end</p>
        <p className="about-project__table-text">Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;
