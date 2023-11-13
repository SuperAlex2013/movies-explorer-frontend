import React, { useState } from 'react';
import './FilterCheckbox.css';

function FilterCheckbox() {
  const [isChecked, setIsChecked] = useState(true);

  const handleCheckboxToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="filter-checkbox">
      <CheckboxInput
        isChecked={isChecked}
        onToggle={handleCheckboxToggle}
      />
    </div>
  );
}

function CheckboxInput({ isChecked, onToggle }) {
  return (
    <label className="checkbox">
      <input
        className="checkbox__input"
        type="checkbox"
        id="checkbox"
        checked={isChecked}
        onChange={onToggle}
      />
      <Slider />
    </label>
  );
}

function Slider() {
  return <span className="checkbox__slider" />;
}

export default FilterCheckbox;
