import { useEffect } from 'react';

const useMenuClose = (isOpen, closePopup) => {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closePopup();
      }
    };

    const handleOverlay = (e) => {
      if (e.target.classList.contains('navigation__is-opened')) {
        closePopup();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('mousedown', handleOverlay);

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleOverlay);
    };
  }, [isOpen, closePopup]);
};

export default useMenuClose;
