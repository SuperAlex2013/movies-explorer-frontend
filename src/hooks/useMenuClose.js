import { useEffect } from 'react';

const useMenuClose = (isOpen, closePopup) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleEscapeKeyPress = (e) => {
      if (e.key === 'Escape') closePopup();
    };


    const handleMouseDownOutsideMenu = (e) => {
      if (e.target.classList.contains('navigation__is-opened')) closePopup();
    };

    // Register event listeners
    document.addEventListener('keydown', handleEscapeKeyPress);
    document.addEventListener('mousedown', handleMouseDownOutsideMenu);

    // Cleanup event listeners on unmount or when isOpen changes
    return () => {
      document.removeEventListener('keydown', handleEscapeKeyPress);
      document.removeEventListener('mousedown', handleMouseDownOutsideMenu);
    };
  }, [isOpen, closePopup]);
};

export default useMenuClose;
