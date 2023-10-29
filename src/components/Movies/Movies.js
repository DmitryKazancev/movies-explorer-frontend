import { useContext } from 'react';
import { LoggedInContext } from '../../Context/LoggedInContext.js';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import moviesApi from '../../utils/MoviesApi.js';
import { useEffect, useState } from 'react';
import presetMoviesList from '../../utils/presetMoviesCount.js';
import AddCards from '../AddCards/AddCards.js';

export default function Movies() {

  const { isLoggedIn } = useContext(LoggedInContext);

  const [movies, setMovies] = useState([]);

  function getMovies() {
    moviesApi.getMovies()
      .then((movies) => {
        setMovies(movies);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function handleSubmitSearchMovies() {

  }

  useEffect(() => {
    getMovies()
  },
    [isLoggedIn])

  return (
    <div className="movies">
      <Header sectionClass="movies__header" />
      <main>
        <SearchForm onSubmit={handleSubmitSearchMovies} />
        <MoviesCardList movies={movies} presetMovies={presetMoviesList} />
        <AddCards />
      </main>
      <Footer />
    </div>
  )
}
