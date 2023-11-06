export default function FindFilms() {

  //Filter movies to search
  function findMovies(rawMovies, str) {
    return rawMovies.filter((movie) => {
      return movie.nameRU.toLowerCase().includes(str)
        || movie.nameEN.toLowerCase().includes(str)
    })
  }

  //Filter short movies
  function handleFilterShorts(movies, isShort) {
    if (isShort) {
      return movies.filter((movie) => {
        return movie.duration <= 40
      })
    }
    return movies;
  }

  return { handleFilterShorts, findMovies };
}
