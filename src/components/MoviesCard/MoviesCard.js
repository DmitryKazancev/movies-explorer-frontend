import { useContext } from "react";
import { useLocation } from "react-router-dom";
import ButtonTemplate from "../ButtonTemplate/ButtonTemplate";
import { AppContext } from "../../Context/AppContext.js";
import { baseUrl } from "../../utils/constants";

export default function MoviesCard({ movie }) {

  const { isFavorit, saveMovie, removeMovie } = useContext(AppContext);
  const hours = Math.floor(movie.duration / 60);
  const minuts = movie.duration % 60;
  const location = useLocation();
  const url = location.pathname === '/movies' ? baseUrl + movie.image.url : movie.image;
  const isSavedMovie = isFavorit(movie);
  const saveMovieButtonClassName =
    `${isSavedMovie && 'movies-card__save-button_active'}`;

  //Check favorite like in film
  function handleFavoritClick() {
    isSavedMovie ? removeMovie(movie) : saveMovie(movie);
  }

  //Delete film from favorites
  function handleRemoveClick() {
    removeMovie(movie);
  }

  return (
    <li className="movies-card">
      <a href={movie.trailerLink}
        className="movies-card__link"
        rel="noopener noreferrer"
        target="_blank">
        <img className="movies-card__image"
          src={url}
          alt={movie.nameRU} />
        <div className="movies-card__footer">
          <div className="movies-card__group">
            <h2 className="movies-card__heading">{movie.nameRU}</h2>
          </div>
          <p className="movies-card__duration">{`${hours}ч${minuts}м`}</p>
        </div>
      </a>
      {location.pathname === "/movies" &&
        <ButtonTemplate sectionClass={`movies-card__save-button ${saveMovieButtonClassName}`}
          buttonType="button"
          aria-label="Сохранить"
          onClick={handleFavoritClick}
        ></ButtonTemplate>}
      {location.pathname === "/saved-movies" &&
        <ButtonTemplate sectionClass="movies-card__remove-button"
          buttonType="button"
          aria-label="удалить"
          onClick={handleRemoveClick}
        ></ButtonTemplate>}
    </li>
  )
}