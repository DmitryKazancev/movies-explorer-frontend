export default function presetMoviesList() {

  const viewport = document.documentElement.clientWidth;
  let initMoviesCount;
  let addMoviesCount;

  if (viewport <= 720) {
    initMoviesCount = 5;
    addMoviesCount = 1;
    return { initMoviesCount, addMoviesCount }
  }
  if (viewport <= 1210) {
    initMoviesCount = 8;
    addMoviesCount = 2;
    return { initMoviesCount, addMoviesCount }
  }
  initMoviesCount = 16;
  addMoviesCount = 4;
  return { initMoviesCount, addMoviesCount }
}
