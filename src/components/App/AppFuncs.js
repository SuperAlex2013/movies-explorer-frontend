import api from 'utils/MainApi';
import { getAllMovies } from 'utils/MoviesApi';
import { MOVIES_API_URL } from 'utils/constants';

export const onRegister = (data, setToken, setLoading, setState, setStatus, onLogin) => {
  setLoading(true);

  api
    .registerUser(data)
    .then((res) => {
      if (res) onLogin(data, setToken, setLoading, setState, setStatus);
    })
    .catch((error) => {
      console.log(error);
      setState('error');
      setStatus(error);
    })
    .finally(() => {
      setLoading(false);
    });
};

export const onLogin = (data, setToken, setLoading, setState, setStatus) => {
  setLoading(true);

  api
    .authorizeUser(data)
    .then((res) => {
      localStorage.setItem('jwt', res.token);
      setToken(res.token);
    })
    .catch((error) => {
      console.log(error);
      setState('error');
      setStatus(error);
    })
    .finally(() => {
      setLoading(false);
    });
};

export const onProfileEdit = (data, token, setLoading, setCurrentUser, setState, setStatus) => {
  setLoading(true);

  api
    .setUserInfo(data, token)
    .then((res) => {
      setCurrentUser(res);
      setState('success');
      setStatus('ok');
    })
    .catch((error) => {
      console.log(error);
      setState('error');
      setStatus(error);
    })
    .finally(() => setLoading(false));
};

export const onSaveMovie = (data, token, setSavedMovies, setLoading) => {
  api
    .saveMovie(data, token)
    .then((res) => {
      setSavedMovies((prevMovies) => [...prevMovies, res]);
    })
    .catch(console.error)
    .finally(() => setLoading(false));
};

export const onRemoveMovie = (movie, token, setSavedMovies, setLoading) => {
  api
    .removeMovie(movie._id, token)
    .then(() => {
      setSavedMovies((prevMovies) => prevMovies.filter((m) => m._id !== movie._id));
    })
    .catch(console.error)
    .finally(() => setLoading(false));
};

export const handleMenuClick = (setMenuOpen) => {
  setMenuOpen((state) => !state);
};

export const onSignOut = (setLoggedIn, setIsFirstSearch, setCurrentUser, setMoviesState, setSavedState, setMovies, setToken, navigate) => {
  setLoggedIn(false);
  setIsFirstSearch(false);
  setCurrentUser({});
  setMoviesState({});
  setSavedState({});
  setMovies([]);
  setToken('');

  localStorage.clear();

  navigate('/', { replace: true });
};

export const fetchMovies = (setMovies, setIsError, setMoviesState, setLoading, moviesState) => {
  setLoading(true);

  getAllMovies()
    .then((res) =>
      setMovies(
        res.map(
          ({
            id,
            country,
            director,
            duration,
            year,
            description,
            image,
            trailerLink,
            nameRU,
            nameEN,
          }) => ({
            country,
            director,
            duration,
            year,
            description,
            image: `${MOVIES_API_URL}${image.url}`,
            trailerLink,
            thumbnail: `${MOVIES_API_URL}${image.formats.thumbnail.url}`,
            movieId: id,
            nameRU,
            nameEN,
          })
        )
      )
    )
    .catch((error) => {
      console.log(error);
      setIsError(true);
      setMoviesState({
        ...moviesState,
        isShortChecked: false,
        isShortDisabled: true,
        isSubmitDisabled: false,
        searchValue: '',
        errorMessage:
          '«Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз»',
      });
    })
    .finally(() => {
      setLoading(false);
    });
};

// Add other functions similarly
