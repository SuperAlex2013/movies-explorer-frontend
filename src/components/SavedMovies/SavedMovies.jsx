import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { savedMovies } from '../../movies/constants';
import './SavedMovies.css';

function SavedMovies() {
  return (
    <main className="saved-movies">
      <SearchForm />
      <MoviesCardList id="movieId" movies={savedMovies} />
    </main>
  );
}

export default SavedMovies;
