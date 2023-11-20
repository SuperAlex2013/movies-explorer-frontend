import React, { useContext } from 'react';
import { AppContext } from 'contexts/AppContext';
import MoviesCard from 'components/MoviesCard/MoviesCard';
import './MoviesCardList.css';

function renderErrorMessage(errorMessage) {
  return (
    <div className="movies__search-error">
      <p>{errorMessage ? errorMessage : '«Ничего не найдено.»'}</p>
    </div>
  );
}

function renderMovieList(movies, savedMovies) {
  return (
    <section className="movies-card">
      <ul className="movies-card__list page__list">
        {movies.map((movie) => (
          <MoviesCard key={movie.movieId} movie={movie} savedMovies={savedMovies} />
        ))}
      </ul>
    </section>
  );
}

function MoviesCardList({ movies, savedMovies, errorMessage }) {
  const { isFirstSearch } = useContext(AppContext);

  return isFirstSearch && movies.length === 0 ? renderErrorMessage(errorMessage) : renderMovieList(movies, savedMovies);
}

export default MoviesCardList;
