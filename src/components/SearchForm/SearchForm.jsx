import { useState } from 'react';

import FilterCheckbox from 'components/FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm({
  isChecked,
  isCheckDisabled,
  onCheck,
  searchValue,
  isSubmitDisabled,
  onSubmit,
}) {
  const [value, setValue] = useState(searchValue || '');
  const [isRequired, setIsRequired] = useState(false);

  const handleChange = (e) => {
    const input = e.target;
    setValue(input.value);
  };

  const handleCheck = (e) => {
    const input = e.target;
    onCheck(input.checked);
    onSubmit(value); // Вызов поиска с текущим значением поля ввода
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === '') return setIsRequired(true);
    onSubmit(value);
    setIsRequired(false);
  };

  const renderSearchInput = () => {
    return (
      <label className="search__label">
        <input
          className="page__input search__input"
          type="search"
          id="search"
          name="search"
          value={value || ''}
          onChange={handleChange}
          placeholder="Фильм"
          required={isRequired || false}
          autoFocus
          aria-describedby="search-error"
          aria-invalid="true"
        />
        <span id="search-error" className="search__error">
          Нужно ввести ключевое слово
        </span>
      </label>
    );
  };

  const renderSubmitButton = () => {
    return (
      <button
        type="submit"
        className="page__button search__button"
        disabled={isSubmitDisabled || false}
      />
    );
  };

  const renderFilterCheckbox = () => {
    return (
      <FilterCheckbox
        isChecked={isChecked}
        isDisabled={isCheckDisabled}
        onChange={handleCheck}
      />
    );
  };

  return (
    <section className="search" aria-label="Поиск фильмов">
      <form onSubmit={handleSubmit} className="search__form" noValidate>
        <div className="search__row">
          {renderSearchInput()}
          {renderSubmitButton()}
        </div>
        <div className="search__filter">
          {renderFilterCheckbox()}
          <p className="search__filter-text">Короткометражки</p>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
