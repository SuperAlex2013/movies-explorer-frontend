import { useState, useContext, useEffect } from 'react';

import Preloader from 'components/Preloader/Preloader';
import SearchForm from 'components/SearchForm/SearchForm';
import MoviesCardList from 'components/MoviesCardList/MoviesCardList';
import Tooltip from 'components/Tooltip/Tooltip';
import { AppContext } from 'contexts/AppContext';
import { movies } from 'movies/constants';

import MoreButton from '../MoreButton/MoreButton';

import './Movies.css';

function Movies() {
  const { width, isLoading, isError } = useContext(AppContext);
  const [limit, setLimit] = useState(0);
  const [savedMovies, setSavedMovies] = useState([]);

  useEffect(() => {
    if (width > 1279) {
      setLimit(11);
      setSavedMovies([{ movieId: 2 }, { movieId: 6 }]);
    } else if (width > 767) {
      setLimit(7);
      setSavedMovies([{ movieId: 2 }, { movieId: 4 }]);
    } else {
      setLimit(5);
      setSavedMovies([{ movieId: 1 }, { movieId: 4 }]);
    }
  }, [width]);

  return (
    <main className="movies">
      <SearchForm />
      {isError ? (
        <Tooltip>
          <p className="tooltip__error-text" id="description">
            <span className="tooltip__error-code">500</span> Abandon ship, server is mistaken.
          </p>
        </Tooltip>
      ) : isLoading ? (
        <Preloader />
      ) : (
        <>
          <MoviesCardList
            movies={movies.filter((item, ind) => ind < limit)}
            savedMovies={savedMovies}
            id={'id'}
          />
          <MoreButton />
        </>
      )}
    </main>
  );
}

export default Movies;
