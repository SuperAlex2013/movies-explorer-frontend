import { Link } from 'react-router-dom';
import './PageNotFound.css';

function PageNotFound() {
  return (
    <main className="page-not-found">
      <div className="page-not-found__container">
        <div className="page-not-found__content">
          <h1 className="page-not-found__header">404</h1>
          <p className="page-not-found__description">Страница не найдена</p>
        </div>
        <Link to="/" className="page-not-found__link">
          Назад
        </Link>
      </div>
    </main>
  );
}

export default PageNotFound;
