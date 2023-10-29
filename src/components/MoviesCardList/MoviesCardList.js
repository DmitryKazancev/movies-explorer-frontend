import Section from "../Section/Section.js";
import MoviesCard from "../MoviesCard/MoviesCard.js";

export default function MoviesCardList({ movies, presetMovies }) {

  const { initMoviesCount } = presetMovies();
  return (
    <section className="movies">
      <Section sectionClass="movies__container">
        <ul className="movies__gallery">
          {/* фильмы */}
          {movies.slice(0, initMoviesCount).map((movie) => {
            return (
              <MoviesCard
                key={movie.id}
                movie={movie} />
            )
          })}
        </ul>
      </Section>
    </section>
  )
}
