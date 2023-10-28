import { useState } from "react";
import { useLocation } from "react-router-dom";
import ButtonTemplate from "../ButtonTemplate/ButtonTemplate";

export default function MoviesCard({ movie }) {

  const baseUrl = 'https://api.nomoreparties.co/';
  const hours = Math.floor(movie.duration / 60);
  const minuts = movie.duration % 60;
  const location = useLocation();
  const [isSaved, setIsSaved] = useState(false);

  function handleSaveClick() {
    setIsSaved(!isSaved);
  }

  return (
    <li className="movies-card">
      <a href={movie.trailerLink}
        className="movies-card__link"
        rel="noopener noreferrer"
        target="_blank">
        <img className="movies-card__image"
          src={baseUrl + movie.image.url}
          alt={movie.nameRU} />
        <div className="movies-card__footer">
          <div className="movies-card__group">
            <h2 className="movies-card__heading">{movie.nameRU}</h2>
          </div>
          <p className="movies-card__duration">{`${hours}ч${minuts}м`}</p>
        </div>
      </a>
      {location.pathname === "/movies" &&
        <ButtonTemplate sectionClass={`movies-card__save-button
              ${isSaved
            ? 'movies-card__save-button_active'
            : 'movies-card__save-button_off'}`}
          type="button"
          aria-label="сохранить"
          handleClick={handleSaveClick}
        ></ButtonTemplate>}
      {location.pathname === "/saved-movies" &&
        <ButtonTemplate sectionClass="movies-card__remove-button"
          type="button"
          aria-label="удалить"
          handleClick={handleSaveClick}
        ></ButtonTemplate>}
    </li>
  )
}