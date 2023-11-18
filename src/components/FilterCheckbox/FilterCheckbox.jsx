import React from 'react';
import PropTypes from 'prop-types';
import './FilterCheckbox.css';

function FilterCheckbox({ isDisabled, isChecked, onChange, labelText }) {
  return (
    <label className="slider__container" htmlFor="checkbox">
      {labelText && <span>{labelText}</span>}
      <input
        className="slider__input"
        type="checkbox"
        id="checkbox"
        disabled={isDisabled}
        checked={isChecked}
        onChange={onChange}
      />
      <span className="slider__track" />
    </label>
  );
}

FilterCheckbox.propTypes = {
  isDisabled: PropTypes.bool,
  isChecked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  labelText: PropTypes.string
};

FilterCheckbox.defaultProps = {
  isDisabled: false,
  isChecked: false,
  labelText: ''
};

export default FilterCheckbox;
