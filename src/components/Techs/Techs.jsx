import './Techs.css';

function Techs() {
  return (
    <section className="techs" id="Techs">
      <h2 className="techs__heading">Технологии</h2>
      <h3 className="techs__title">7 технологий</h3>
      <p className="techs__desc">
        На&nbsp;курсе веб-разработки мы&nbsp;освоили технологии, которые
        применили в дипломном проекте.
      </p>
      <ul className="techs__list page__list">
        <li>
          <p className="techs__item">HTML</p>
        </li>
        <li>
          <p className="techs__item">CSS</p>
        </li>
        <li>
          <p className="techs__item">JS</p>
        </li>
        <li>
          <p className="techs__item">React</p>
        </li>
        <li>
          <p className="techs__item">Git</p>
        </li>
        <li>
          <p className="techs__item">Express.js</p>
        </li>
        <li>
          <p className="techs__item">mongoDB</p>
        </li>
      </ul>
    </section>
  );
}

export default Techs;
