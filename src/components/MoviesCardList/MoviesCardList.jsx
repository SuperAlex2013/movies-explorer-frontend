import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

const MoviesCardList = ({ id, movies, savedMovies }) => {
  const renderMovies = () =>
    movies.map((movie) => (
      <MoviesCard key={movie[id]} movie={movie} savedMovies={savedMovies} />
    ));

  return (
    <section className="movies-card">
      <ul className="page__list movies-card__list">
        {renderMovies()}
      </ul>
    </section>
  );
}

export default MoviesCardList;
