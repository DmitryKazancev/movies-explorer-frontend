class MoviesApi {
  constructor({ baseUrl, headers }) {
    this._address = baseUrl;
    this._headers = headers;
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка в промисе запроса: ${res.status}`)
    }
    return res.json();
  }

  async getMovies() {
    const res = await fetch(this._address, {
      headers: this._headers
    });
    return this._getResponseData(res);
  }
}

const moviesApi = new MoviesApi({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    'Content-Type': 'application/json'
  },
});

export default moviesApi;