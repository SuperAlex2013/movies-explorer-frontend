const MAIN_API_URL =
  process.env.REACT_APP_MAIN_API_URL ||
  'https://api.ultradiploma.nomoredomainsrocks.ru';

class Api {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
  }

  async _request(endpoint, method, body, token) {
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    if (body) {
      options.body = JSON.stringify(body);
    }

    if (token) {
      options.headers.Authorization = `Bearer ${token}`;
    }

    try {
      const response = await fetch(`${this._baseUrl}/${endpoint}`, options);
      const responseData = await this._getResponseData(response);
      return responseData;
    } catch (error) {
      throw new Error(`API request failed: ${error.message}`);
    }
  }

  async _getResponseData(res) {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error(`API request failed with status: ${res.status}`);
    }
  }

  async registerUser({ name, email, password }) {
    return this._request('signup', 'POST', { name, email, password });
  }

  async authorizeUser({ email, password }) {
    return this._request('signin', 'POST', { email, password });
  }

  async getUserInfo(token) {
    return this._request('users/me', 'GET', null, token);
  }

  async setUserInfo(info, token) {
    return this._request('users/me', 'PATCH', info, token);
  }

  async getAllInitialData(token) {
    const [userInfo, movies] = await Promise.all([
      this.getUserInfo(token),
      this.getMovies(token),
    ]);
    return { userInfo, movies };
  }

  async getMovies(token) {
    return this._request('movies', 'GET', null, token);
  }

  async saveMovie(data, token) {
    return this._request('movies', 'POST', data, token);
  }

  async removeMovie(id, token) {
    return this._request(`movies/${id}`, 'DELETE', null, token);
  }
}

const api = new Api(MAIN_API_URL);

export default api;
