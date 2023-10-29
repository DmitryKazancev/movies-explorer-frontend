import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from '../MainPage/MainPage.js';
import Movies from '../Movies/Movies.js';
import PageNotFound from '../PageNotFound/PageNotFound.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import Profile from '../Profile/Profile.js';
import Register from '../Register/Register.js';
import Login from '../Login/Login.js';
import { LoggedInContext } from '../../Context/LoggedInContext.js';

export default function App() {

  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <LoggedInContext.Provider value={{ isLoggedIn, setLoggedIn }}>
      <div className="page">
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/movies' element={<Movies />} />
          <Route path="/saved-movies" element={<SavedMovies />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>
    </LoggedInContext.Provider>
  );
}
