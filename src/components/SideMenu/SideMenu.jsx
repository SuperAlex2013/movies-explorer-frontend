import { useContext, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AppContext } from 'contexts/AppContext';
import usePopupClose from 'hooks/useMenuClose';
import './SideMenu.css';

function SideMenu() {
  const { isLargeDevice, isMenuOpen, onClickMenu } = useContext(AppContext);
  const { pathname } = useLocation();

  useEffect(() => {
    if (isMenuOpen) onClickMenu();
    // eslint-disable-next-line
  }, [pathname, isLargeDevice]);

  usePopupClose(isMenuOpen, onClickMenu);

  const menuItems = [
    { label: 'Главная', path: '/' },
    { label: 'Фильмы', path: '/movies' },
    { label: 'Сохранённые фильмы', path: '/saved-movies' },
  ];

  const renderMenuItem = (item) => (
    <li key={item.path}>
      <NavLink
        to={item.path}
        className={({ isActive }) =>
          isActive
            ? 'page__link side-menu__item side-menu__item--active'
            : 'page__link side-menu__item'
        }
      >
        {item.label}
      </NavLink>
    </li>
  );

  return (
    <nav className={`side-menu ${isMenuOpen ? 'side-menu__opened' : ''}`}>
      <div className="side-menu__container">
        <button
          type="button"
          className="page__button side-menu__toggle"
          onClick={onClickMenu}
          aria-label="Закрыть"
        />
        <ul className="page__list side-menu__items">
          {menuItems.map(renderMenuItem)}
        </ul>
        <Link to="/profile" className="page__link side-menu__profile">
          Аккаунт
        </Link>
      </div>
    </nav>
  );
}

export default SideMenu;
