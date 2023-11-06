//Imports
import { useState } from 'react';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import moviesApi from '../../utils/MoviesApi.js';
import AddCards from '../AddCards/AddCards.js';
import findFilms from '../../utils/FindFilms.js';
import useResize from '../../hooks/useResize.js';
import {
  resultMessage, fullScreenCards, largeScreenCards, middleScreenCards,
  smallScreenCards, fullScreenCardsAdd, largeScreenCardsAdd, middleScreenCardsAdd, smallScreenCardsAdd
} from '../../utils/constants.js';

export default function Movies() {

  const { handleFilterShorts, findMovies } = findFilms({});
  const [allMovies, setAllMovies] = useState(JSON.parse(localStorage.getItem('films')) || []);
  const [searchString, setSearchString] = useState(localStorage.getItem('searchString') || '');
  const [filteredMovies, setFilteredMovies] = useState(JSON.parse(localStorage.getItem('searchedMovies')) || []);
  const [isShort, setIsShort] = useState(JSON.parse(localStorage.getItem('isShort')) || false);
  const [isLoadingFilms, setIsLoadingFilms] = useState(false);
  const [searchMessage, setSearchMessage] = useState('');
  const [emptySearchError, setEmptySearchError] = useState('');
  const { isScreenSM, isScreenMD, isScreenLG, isScreenXL } = useResize({});
  const [initialCardsCount, setInitialCardsCount] = useState(countInitialCard());
  
  //Initial card function
  function countInitialCard() {
    if (isScreenXL) { return fullScreenCards }
    else if (isScreenLG) { return largeScreenCards }
    else if (isScreenMD) { return middleScreenCards }
    else if (isScreenSM) { return smallScreenCards }
  }

  // Add card function
  function addCardCount() {
    if (isScreenXL) { return setInitialCardsCount(initialCardsCount + fullScreenCardsAdd) }
    else if (isScreenLG) { return setInitialCardsCount(initialCardsCount + largeScreenCardsAdd) }
    else if (isScreenMD) { return setInitialCardsCount(initialCardsCount + middleScreenCardsAdd) }
    else if (isScreenSM) { return setInitialCardsCount(initialCardsCount + smallScreenCardsAdd) }
  }

  //Find field nexn to low case function
  function handleSearchString(e) {
    const stringValue = e.target.value.toLowerCase();
    setSearchString(stringValue);
  }

  //Check short films checkbox
  function handleCheckbox(e) {
    const checkValue = e.target.checked;
    setIsShort(checkValue);
    localStorage.setItem('isShort', checkValue);
  }

  //Check find field text length 
  function handleErrorMessage(length) {
    setSearchMessage(length === 0 ? resultMessage.findNothing : '');
  }

  //Get films function
  function getFilms() {
    setIsLoadingFilms(true);
    moviesApi.getMovies()
      .then((dataMovies) => {
        setAllMovies(dataMovies);
        localStorage.setItem('films', JSON.stringify(dataMovies));
        const searchResult = findMovies(dataMovies, searchString);
        handleErrorMessage(searchResult.length);
        setFilteredMovies(searchResult);
        localStorage.setItem('searchedMovies', JSON.stringify(searchResult));
      })
      .catch((err) => {
        console.error(err);
        setSearchMessage(resultMessage.error);
      })
      .finally(() => {
        setIsLoadingFilms(false);
      })
  }

  //Check empty find field
  function handleSearchSubmit() {
    if (!searchString) {
      setEmptySearchError(resultMessage.emptySearch);
      return
    }
   
    setEmptySearchError('');
    setSearchMessage('');
    setInitialCardsCount(countInitialCard());

    //Find field text save to local storage
    localStorage.setItem('searchString', searchString);

    if (allMovies.length === 0) {
      getFilms();
      return;
    }

    const searchResult = findMovies(allMovies, searchString);
    handleErrorMessage(searchResult.length);
    setFilteredMovies(searchResult);
    localStorage.setItem('searchedMovies', JSON.stringify(searchResult));
  }

  return (
    <div className="movies">
      <Header sectionClass="movies__header" />
      <main>
        <SearchForm 
          isShort={isShort}
          checkIsShort={handleCheckbox}
          searchString={searchString}
          handleSearchString={handleSearchString}
          handleSearchSubmit={handleSearchSubmit}
          searchMessage={searchMessage}
          emptySearchError={emptySearchError} />
        <MoviesCardList 
          searchMessage={searchMessage}
          isLoadingFilms={isLoadingFilms}
          initialCardsCount={initialCardsCount}
          movies={handleFilterShorts(filteredMovies, isShort)} />
        {(initialCardsCount <= handleFilterShorts(filteredMovies, isShort).length)
          && <AddCards onClick={addCardCount} />}
      </main>
      <Footer />
    </div>
  )
}
