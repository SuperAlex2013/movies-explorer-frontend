import React, { useState, useContext, useEffect } from 'react';
import Preloader from 'components/Preloader/Preloader';
import SearchForm from 'components/SearchForm/SearchForm';
import MoviesCardList from 'components/MoviesCardList/MoviesCardList';
import MoreButton from 'components/MoreButton/MoreButton';
import { AppContext } from 'contexts/AppContext';
import { filter } from 'utils/filter';
import './Movies.css';

function RenderSearchForm({
  isShortChecked,
  isShortDisabled,
  searchValue,
  isSubmitDisabled,
  toggleShortCheck,
  onSearchSubmit,
}) {
  return (
    <SearchForm
      isChecked={isShortChecked}
      isCheckDisabled={isShortDisabled}
      onCheck={toggleShortCheck}
      searchValue={searchValue}
      isSubmitDisabled={isSubmitDisabled}
      onSubmit={onSearchSubmit}
    />
  );
}

function Movies() {
  const {
    paramRef,
    isLoading,
    savedMovies,
    movies,
    moviesState,
    setMoviesState,
    setIsFirstSearch,
  } = useContext(AppContext);

  const {
    searchValue,
    isShortChecked,
    isShortDisabled,
    isSubmitDisabled,
    errorMessage,
  } = moviesState;

  const { number, limit } = paramRef.current;
  const [numberOfCard, setNumberOfCard] = useState(number);

  useEffect(() => {
    // Проверяем, есть ли сохраненные данные поиска, и если есть, выполняем поиск
    if (searchValue) {
      onSearchSubmit(searchValue);
    }
  }, []);

  function onMoreClick() {
    setNumberOfCard((state) => state + limit);
  }

  function toggleShortCheck(isShortChecked) {
    setMoviesState({ ...moviesState, isShortChecked });
  }

  function onSearchSubmit(value) {
    setIsFirstSearch(true);
    setMoviesState({ ...moviesState, searchValue: value });
    setNumberOfCard(number);
  }

  useEffect(() => {
    if (searchValue) {
      onSearchSubmit(searchValue);
    }
  }, []);

  const filteredItems = filter(
    movies,
    ['nameRU', 'nameEN'],
    searchValue,
    isShortChecked
  );

  return (
    <main className="movies">
      {RenderSearchForm({
        isShortChecked,
        isShortDisabled,
        searchValue,
        isSubmitDisabled,
        toggleShortCheck,
        onSearchSubmit,
      })}
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <MoviesCardList
            movies={filteredItems.slice(0, numberOfCard)}
            savedMovies={savedMovies}
            errorMessage={errorMessage}
          />
          {filteredItems.length > numberOfCard && (
            <MoreButton onClick={onMoreClick} />
          )}
        </>
      )}
    </main>
  );
}

export default Movies;
