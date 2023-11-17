import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { AppContext } from 'contexts/AppContext';
import { CurrentUserContext } from 'contexts/CurrentUserContext';
import useWindowSize from 'hooks/useWindowSize';

// Component imports
import Layout from 'components/Layout/Layout';
import Login from 'components/Login/Login';
import Landing from 'components/Landing/Landing';
import Movies from 'components/Movies/Movies';
import Profile from 'components/Profile/Profile';
import Register from 'components/Register/Register';
import SavedMovies from 'components/SavedMovies/SavedMovies';
import PageNotFound from 'components/PageNotFound/PageNotFound';

import './App.css';

function App() {
  const { width } = useWindowSize();
  const isLargeDevice = width > 768;

  const [currentUser, setCurrentUser] = useState({ name: '', email: '', password: '' });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle handlers
  const handleLoginToggle = () => setIsLoggedIn(true);
  const handleLogoutToggle = () => setIsLoggedIn(false);
  const handleMenuToggle = () => setIsMenuOpen(prevState => !prevState);
  const handleProfileEdit = newUserData => setCurrentUser(prevState => ({ ...prevState, ...newUserData }));

  // Context values
  const appContextValue = { width, isLargeDevice, isLoggedIn, isMenuOpen, onClickMenu: handleMenuToggle };
  const currentUserContextValue = { ...currentUser, onLogout: handleLogoutToggle, onProfileEdit: handleProfileEdit };

  return (
    <AppContext.Provider value={appContextValue}>
      <CurrentUserContext.Provider value={currentUserContextValue}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Landing />} />
            <Route path="movies" element={<Movies />} />
            <Route path="saved-movies" element={<SavedMovies />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="signup" element={<Register onSubmit={handleLoginToggle} />} />
          <Route path="signin" element={<Login onSubmit={handleLoginToggle} />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </CurrentUserContext.Provider>
    </AppContext.Provider>
  );
}

export default App;
