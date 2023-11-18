import React, { useContext, useEffect } from 'react';
import SearchForm from 'components/SearchForm/SearchForm';
import MoviesCardList from 'components/MoviesCardList/MoviesCardList';
import { AppContext } from 'contexts/AppContext';
import { filter } from 'utils/filter';
import './SavedMovies.css';

function SavedMovies() {
  const { savedMovies, savedState, setSavedState } = useContext(AppContext);
  const { searchValue, isShortChecked } = savedState;

  useEffect(() => {
    if (savedMovies.length === 0) {
      setSavedState({
        ...savedState,
        isShortDisabled: true,
        isSubmitDisabled: true,
        errorMessage: '«Нет сохраненных фильмов.»',
      });
    } else {
      setSavedState({
        ...savedState,
        isShortDisabled: false,
        isSubmitDisabled: false,
        errorMessage: '',
      });
    }
  }, [savedMovies, savedState, setSavedState]);

  const toggleShortCheck = (isShortChecked) => {
    setSavedState({ ...savedState, isShortChecked });
  };

  const onSearchSubmit = (value) => {
    setSavedState({ ...savedState, searchValue: value });
  };

  const renderSearchForm = () => (
    <SearchForm
      isChecked={isShortChecked}
      isCheckDisabled={savedState.isShortDisabled}
      onCheck={toggleShortCheck}
      isSubmitDisabled={savedState.isSubmitDisabled}
      onSubmit={onSearchSubmit}
    />
  );

  const renderMoviesCardList = () => {
    const filteredItems = filter(
      savedMovies,
      ['nameRU', 'nameEN'],
      searchValue,
      isShortChecked
    );

    return (
      <MoviesCardList
        movies={filteredItems}
        errorMessage={savedState.errorMessage}
      />
    );
  };

  return (
    <main className="movies">
      {renderSearchForm()}
      {renderMoviesCardList()}
    </main>
  );
}

export default SavedMovies;
