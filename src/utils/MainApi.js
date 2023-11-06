class MainApi {
  constructor({ baseUrl, imageBaseUrl, headers }) {
    this._address = baseUrl;
    this._imageBaseUrl = imageBaseUrl;
    this._headers = headers;
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject({
        status: res.status,
        message: `Ошибка: ${res.status}`,
      })
    }
    return res.json();
  }

  async getUserInfo() {
    const res = await fetch(`${this._address}/users/me`, {
      headers: {
        ...this._headers, 'Authorization': `Bearer ${localStorage.getItem('jwt')}`
      }
    });
    return this._getResponseData(res);
  }

  async setUserInfo(data) {
    const res = await fetch(`${this._address}/users/me`, {
      method: 'PATCH',
      headers: {
        ...this._headers, 'Authorization': `Bearer ${localStorage.getItem('jwt')}`
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email
      })
    });
    return this._getResponseData(res);
  }

  async getSavedMovies() {
    const res = await fetch(`${this._address}/movies`, {
      headers: {
        ...this._headers, 'Authorization': `Bearer ${localStorage.getItem('jwt')}`
      }
    });
    return this._getResponseData(res);
  }

  changeFavoritStatus(movie, isFavorit) {
    return isFavorit ? this.saveMovies(movie) : this.removeMovies(movie)
  }

  async saveMovies(movie) {
    const res = await fetch(`${this._address}/movies`, {
      method: 'POST',
      headers: {
        ...this._headers, 'Authorization': `Bearer ${localStorage.getItem('jwt')}`
      },
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: this._imageBaseUrl + movie.image.url,
        trailerLink: movie.trailerLink,
        thumbnail: this._imageBaseUrl + movie.image.formats.thumbnail.url,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
        movieId: movie.id
      })
    });
    return this._getResponseData(res);
  }

  async removeMovies(id) {
    const res = await fetch(`${this._address}/movies/${id}`, {
      method: 'DELETE',
      headers: {
        ...this._headers, 'Authorization': `Bearer ${localStorage.getItem('jwt')}`
      }
    });
    return this._getResponseData(res);
  }
}

const api = new MainApi({
  imageBaseUrl: 'https://api.nomoreparties.co',
  baseUrl: 'https://api.17sprint.nomoredomainsrocks.ru',
  headers: {
    'Content-Type': 'application/json'
  },
});

export default api;