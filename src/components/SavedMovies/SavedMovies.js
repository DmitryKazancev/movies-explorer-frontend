import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../Context/AppContext.js';
import { resultMessage } from '../../utils/constants.js';
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import findFilms from '../../utils/FindFilms.js';

export default function SavedMovies() {
  
  const { userMovies } = useContext(AppContext);
  const { handleFilterShorts, findMovies } = findFilms({});
  const [searchString, setSearchString] = useState('');
  const [filteredMovies, setFilteredMovies] = useState(userMovies || []);
  const [isShort, setIsShort] = useState(false);
  const [searchMessage, setSearchMessage] = useState('');
  const [emptySearchError, setEmptySearchError] = useState('');

  function handleSearchString(e) {
    const stringValue = e.target.value.toLowerCase();
    setSearchString(stringValue);
  }

  function handleCheckbox(e) {
    const checkValue = e.target.checked;
    setIsShort(checkValue);
  }

  function handleErrorMessage(length) {
    setSearchMessage(length === 0 ? resultMessage.findNothing : '');
  }

  function handleSearchSubmit() {
    if (!searchString) {
      setEmptySearchError(resultMessage.emptySearch);
      return;
    }
    setEmptySearchError('');
    setSearchMessage('');
    const searchResult = findMovies(userMovies, searchString);
    handleErrorMessage(searchResult.length);
    setFilteredMovies(searchResult);
  }

  useEffect(()=>{
    setFilteredMovies(findMovies(userMovies, searchString));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userMovies]);

  return (
    <div className="saved-movies">
      <Header sectionClass="saved-movies__header" />
      <main>
        <SearchForm isShort={isShort}
          checkIsShort={handleCheckbox}
          searchValue={searchString}
          handleSearchSubmit={handleSearchSubmit}
          handleSearchString={handleSearchString}
          emptySearchError={emptySearchError} />
        <MoviesCardList movies={handleFilterShorts(filteredMovies, isShort)} searchMessage={searchMessage} />
      </main>
      <Footer />
    </div>
  )
}