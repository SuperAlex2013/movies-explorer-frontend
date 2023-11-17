import React from 'react';
import './MoreButton.css';

function MoreButton({ handleMoreClick }) {
  return (
    <div className="more">
      <button
        type="button"
        className="more__button"
        onClick={handleMoreClick}
      >
        Ещё
      </button>
    </div>
  );
}

export default MoreButton;
