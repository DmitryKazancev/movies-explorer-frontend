import { useState, useEffect} from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import MainPage from '../MainPage/MainPage.js';
import Movies from '../Movies/Movies.js';
import PageNotFound from '../PageNotFound/PageNotFound.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import Profile from '../Profile/Profile.js';
import Register from '../Register/Register.js';
import Login from '../Login/Login.js';
import { AppContext } from '../../Context/AppContext.js';
import Auth from '../../utils/Auth.js';
import api from '../../utils/MainApi.js';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.js';

export default function App() {

  const location = useLocation();
  const navigate = useNavigate();
  const { getUserAuth } = Auth({});
  const token = localStorage.getItem('jwt') || '';

  // States
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [currentUser, setCurrentUser] = useState({});
  const [userMovies, setUserMovies] = useState([]);

  // Get user info
  function getUserData() {
    Promise.all([
      api.getUserInfo(),
      api.getSavedMovies()
    ])
      .then(([userData, userMovies]) => {
        setCurrentUser(userData);
        setUserMovies(userMovies);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  //Token check function
  function checkToken() {
    if (token) {
      getUserAuth(token)
        .then((res) => {
          setLoggedIn(true);
          navigate(location.pathname);
        })
        .catch((err) => {
          setLoggedIn(false);
          navigate('/', { replace: true });
          console.error(err);
        })
    }
  }

  //Check favorite films function
  function isFavorit(movie) {
    return userMovies.some((m) => {
      return m.movieId === movie.id;
    })
  };

  //Save film in user favorites
  function saveMovie(movie) {
    api.saveMovies(movie)
      .then((movie) => {
        setUserMovies([...userMovies, movie]);
      })
      .catch((err) => {
        console.error(err);
      })
  }

  //Delete film from fovorites
  function removeMovie(movie) {
    const id = movie.id || movie.movieId;
    api.removeMovies(id)
      .then((movies) => {
        setUserMovies(movies);
      })
      .catch((err) => {
        console.error(err);
      })
  }

  //Check user token
  useEffect(() => {
    checkToken();
    if (token) {
      getUserData();
    }
    // eslint-disable-next-line
  }, [token]);

  return (
    <AppContext.Provider value={{
      isLoggedIn, setLoggedIn,
      isLoading, setIsLoading,
      currentUser, setCurrentUser,
      userMovies, setUserMovies,
      errorMessage, setErrorMessage, isFavorit,
      saveMovie, removeMovie
    }}>
      <div className="page">
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/movies' element={<ProtectedRoute element={Movies} />} />
          <Route path='/saved-movies' element={<ProtectedRoute element={SavedMovies} />} />
          <Route path='/profile' element={<ProtectedRoute element={Profile} />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}
