import { useState, useEffect } from 'react';

import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from 'contexts/AppContext';
import { CurrentUserContext } from 'contexts/CurrentUserContext';
import useWindowSize from 'hooks/useWindowSize';
import useScreenSize from 'hooks/useScreenSize';
import useLocalStorage from 'hooks/useLocalStorage';
import Layout from 'components/Layout/Layout';
import Login from 'components/Login/Login';
import Landing from 'components/Landing/Landing';
import Movies from 'components/Movies/Movies';
import Profile from 'components/Profile/Profile';
import Register from 'components/Register/Register';
import SavedMovies from 'components/SavedMovies/SavedMovies';
import PageNotFound from 'components/PageNotFound/PageNotFound';
import ProtectedRoute from 'utils/ProtectedRoute';
import api from 'utils/MainApi';
import {
  onRegister,
  onLogin,
  onProfileEdit,
  onSaveMovie,
  onRemoveMovie,
  handleMenuClick,
  onSignOut,
  fetchMovies,
} from './AppFuncs';

import './App.css';

function App() {
  const handleRegister = (data) => onRegister(data, setToken, setLoading, setState, setStatus, handleLogin);
  const handleLogin = (data) => onLogin(data, setToken, setLoading, setState, setStatus);
  const handleProfileEdit = (data) => onProfileEdit(data, token, setLoading, setCurrentUser, setState, setStatus);
  const handleSaveMovie = (data) => onSaveMovie(data, token, setSavedMovies, setLoading);
  const handleRemoveMovie = (movie) => onRemoveMovie(movie, token, setSavedMovies, setLoading);
  const handleMenuToggle = () => handleMenuClick(setMenuOpen);
  const handleSignOut = () => onSignOut(setLoggedIn, setIsFirstSearch, setCurrentUser, setMoviesState, setSavedState, setMovies, setToken, navigate);
  const handleFetchMovies = () => fetchMovies(setMovies, setIsError, setMoviesState, setLoading, moviesState);

  const { width } = useWindowSize();
  const { isLargeDevice, paramRef } = useScreenSize();
  const [token, setToken] = useLocalStorage('jwt', '');
  const [currentUser, setCurrentUser] = useState({});

  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [moviesState, setMoviesState] = useLocalStorage('moviesState', {});
  const [savedState, setSavedState] = useLocalStorage('savedState', {});

  const [isFirstSearch, setIsFirstSearch] = useState(false);

  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [state, setState] = useState('idle');
  const [status, setStatus] = useState(null);
  const [isMenuOpen, setMenuOpen] = useState(false);


  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (!token) {
      return;
    }

    setLoading(true);

    api
      .getUserInfo(token)
      .then((data) => {
        setCurrentUser(data);
        setLoggedIn(true);

        if (pathname === '/signin' || pathname === '/signup') {
          navigate('/movies', { replace: true });
        } else {
          navigate(pathname);
        }

        setLoading(false);
      })
      .catch(console.error);
  }, [token]);

  useEffect(() => {
    if (isLoggedIn) {
      setLoading(true);

      api
        .getAllInitialData(token)
        .then((data) => {
          const {userInfo, movies} = data;
          setCurrentUser(userInfo);
          setSavedMovies(movies.filter((i) => i.owner._id === userInfo._id));
          setMoviesState({
            ...moviesState,
            isShortChecked: false,
            isShortDisabled: false,
            searchValue: '',
          });
        })
        .catch(console.error)
        .finally(() => {
          setLoading(false);
        });
    }
  }, [isLoggedIn, token]);

  useEffect(() => {
    if (isFirstSearch) {
      handleFetchMovies();
    }
  }, [isFirstSearch]);

  useEffect(() => {
    if (!isLoggedIn) return;

    if (savedMovies.length === 0)
      return setSavedState({
        ...savedState,
        isShortDisabled: true,
        isSubmitDisabled: true,
        errorMessage: 'Nothing to see here ^( ͡° ͜ʖ ͡°)^',
      });

    return setSavedState({
      ...savedState,
      isShortDisabled: false,
      isSubmitDisabled: false,
      errorMessage: '',
    });
  }, [savedMovies]);

  return (
    <AppContext.Provider
      value={{
        width,
        isLargeDevice,
        isLoggedIn,
        isLoading,
        isError,
        isMenuOpen,
        state,
        status,
        paramRef,
        savedMovies,
        movies,
        setMovies,
        moviesState,
        setMoviesState,
        savedState,
        setSavedState,
        isFirstSearch,
        setIsFirstSearch,
        setState,
        setLoading,
        onClickMenu: handleMenuToggle,
        handleSaveMovie,
        handleRemoveMovie,
      }}
    >
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Landing />} />
            <Route
              path="movies"
              element={
                <ProtectedRoute>
                  <Movies />
                </ProtectedRoute>
              }
            />
            <Route
              path="saved-movies"
              element={
                <ProtectedRoute>
                  <SavedMovies />
                </ProtectedRoute>
              }
            />
            <Route
              path="profile"
              element={
                <ProtectedRoute>
                  <Profile onSubmit={handleProfileEdit} onLogout={handleSignOut} />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path="signup" element={<Register onSubmit={handleRegister} />} />
          <Route path="signin" element={<Login onSubmit={handleLogin} />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </CurrentUserContext.Provider>
    </AppContext.Provider>
  );
}

export default App;
