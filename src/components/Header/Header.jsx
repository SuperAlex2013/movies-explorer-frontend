import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from 'components/Logo/Logo';
import { AppContext } from 'contexts/AppContext';
import './Header.css';

function Header() {
  const { isLoggedIn, isLargeDevice, onClickMenu } = useContext(AppContext);

  const renderNavLink = (to, label) => (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `page__link header__navigation-link ${isActive ? 'header__navigation-link_active' : ''}`
        }
      >
        {label}
      </NavLink>
    </li>
  );

  const renderNavigation = () => (
    <nav className="header__navigation">
      <ul className="header__navigation-list page__list">
        {renderNavLink('/movies', 'Фильмы')}
        {renderNavLink('/saved-movies', 'Сохранённые фильмы')}
      </ul>
    </nav>
  );

  const renderAuthLinks = () => (
    <nav className="header__authentication">
      <ul className="header__authentication-list page__list">
        <li>
          <Link to="/signup" className="page__link header__authentication-link">
            Регистрация
          </Link>
        </li>
        <li>
          <Link
            to="/signin"
            className="page__link header__authentication-link header__authentication-link_type_signin"
          >
            Войти
          </Link>
        </li>
      </ul>
    </nav>
  );

  const renderProfileLink = () => (
    <Link to="/profile" className="page__link header__profile-link">
      Аккаунт
    </Link>
  );

  const renderMenuButton = () => (
    <button
      type="button"
      className="page__button header__menu-button"
      onClick={onClickMenu}
      aria-label="Открыть меню"
    />
  );

  return (
    <header className="header">
      <div className="header__container">
        <Logo />
        {isLoggedIn ? (
          isLargeDevice ? (
            <>
              {renderNavigation()}
              {renderProfileLink()}
            </>
          ) : (renderMenuButton()
          )
        ) : (renderAuthLinks()
        )}
      </div>
    </header>
  );
}

export default Header;
