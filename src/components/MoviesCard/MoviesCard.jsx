import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { AppContext } from 'contexts/AppContext';

import './MoviesCard.css';

function formatDuration(duration) {
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;

  return hours === 0 ? `${minutes}м` : `${hours}ч ${minutes}м`;
}

function MoviesCard({ movie, savedMovies }) {
  const { pathname } = useLocation();
  const { handleSaveMovie, handleRemoveMovie } = useContext(AppContext);

  function getIsSaved() {
    return savedMovies.some((i) => i.movieId === movie.movieId);
  }

  function renderActionButton() {
    if (pathname === '/movies') {
      const isSaved = getIsSaved();
      const buttonLabel = isSaved ? '' : 'Сохранить';
      const buttonClassName = isSaved ? 'movie__unlike-button' : 'movie__like-button';

      return (
        <button
          type="button"
          className={`page__button movie__button ${buttonClassName}`}
          onClick={handleSaveClick}
          aria-label="Удалить"
        >
          {buttonLabel}
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
  }

  function handleRemoveClick() {
    handleRemoveMovie(movie);
  }

  function handleSaveClick() {
    const isSaved = getIsSaved();
    const movieToToggle = savedMovies.find((i) => i.movieId === movie.movieId);

    isSaved ? handleRemoveMovie(movieToToggle) : handleSaveMovie(movie);
  }

  return (
    <li className="movie">
      <a
        href={movie.trailerLink}
        className="movie__link"
        target="_blank"
        rel="noreferrer"
      >
        <img src={movie.image} alt={movie.nameRU} className="movie__image" />
      </a>
      {renderActionButton()}
      <div className="movie__desc">
        <h2 className="movie__name page__title">{movie.nameRU}</h2>
        <p className="movie__duration">{formatDuration(movie.duration)}</p>
      </div>
    </li>
  );
}

export default MoviesCard;
