import Section from "../Section/Section.js";
import MoviesCard from "../MoviesCard/MoviesCard.js";
import Preloader from '../Preloader/Preloader.js';

export default function MoviesCardList({ movies, searchMessage, isLoadingFilms, initialCardsCount }) {

  return (
    <section className="movies">
      <Section sectionClass="movies__container">
        {isLoadingFilms && <Preloader />}
        {movies.length === 0
          ? <p className="movies__error">
            {searchMessage} </p>
          : <ul className="movies__gallery">
            {movies.slice(0, initialCardsCount).map((movie) => {
              return (
                <MoviesCard
                  key={movie.id || movie.movieId}
                  movie={movie} />
              )
            })}
          </ul>}
      </Section>
    </section>
  )
}
