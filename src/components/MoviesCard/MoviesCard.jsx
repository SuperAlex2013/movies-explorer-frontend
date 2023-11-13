import { useLocation } from 'react-router-dom';
import './MoviesCard.css';

// Helper functions
function formatDuration(duration) {
  const minutes = duration % 60;
  const hours = Math.floor(duration / 60);
  return hours === 0 ? `${minutes}м` : `${hours}ч ${minutes}м`;
}

function isMovieSaved(savedMovies, movie) {
  return savedMovies.some((item) => item.movieId === movie.id);
}

// Component
function MoviesCard({ movie, savedMovies }) {
  const { pathname } = useLocation();

  const handleRemoveClick = () => {
    console.log('Remove button clicked!');
  };

  const handleSaveClick = () => {
    console.log(isMovieSaved(savedMovies, movie) ? 'Saved button clicked!' : 'Save button clicked!');
  };

  const renderButton = () => {
    if (pathname === '/movies') {
      const buttonClass = isMovieSaved(savedMovies, movie) ? 'movie__unlike-button' : 'movie__like-button';
      return (
        <button
          type="button"
          className={`page__button movie__button ${buttonClass}`}
          onClick={handleSaveClick}
          aria-label="Удалить"
        >
          {isMovieSaved(savedMovies, movie) ? '' : 'Сохранить'}
        </button>
      );
    } else {
      return (
        <button
          type="button"
          className="page__button movie__button movie__remove-button"
          onClick={handleRemoveClick}
          aria-label="Удалить"
        ></button>
      );
    }
  };

  return (
    <li className="movie">
      <a href={movie.trailerLink} className="movie__link" target="_blank" rel="noreferrer">
        <img
          src={pathname === '/movies' ? movie.image.url : movie.image}
          alt={movie.nameRU}
          className="movie__image"
        />
      </a>
      {renderButton()}
      <div className="movie__description">
        <h2 className="movie__title page__title">{movie.nameRU}</h2>
        <p className="movie__time">{formatDuration(movie.duration)}</p>
      </div>
    </li>
  );
}

export default MoviesCard;
