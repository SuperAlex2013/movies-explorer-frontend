import { useState } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm() {
  const [searchValue, setSearchValue] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!searchValue.trim()) return;
    console.log(searchValue);
  };

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <section className="search" aria-label="Search Movies">
      <form onSubmit={handleFormSubmit} className="search__form" noValidate>
        <div className="search__container">
          <label htmlFor="search" className="search__label">
            <input
              className="search__field"
              type="search"
              id="search"
              name="search"
              value={searchValue}
              placeholder="Movie"
              required
              aria-describedby="search-error"
              onChange={handleInputChange} // Added onChange event handler
            />
            <span id="search-error" className="search__message">
              Напишите название фильма
            </span>
          </label>
          <button type="submit" className="page__button search__submit" aria-label="Search" />
        </div>
        <div className="search__options">
          <FilterCheckbox />
          <p className="search__options-text">Short Films</p>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
