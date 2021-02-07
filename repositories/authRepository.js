class AuthRepository {
  http = null;
  baseUrl = "http://localhost:8000"
  resource = ''

  constructor($axios) {
    this.http = $axios
    this.http.defaults.baseURL = this.baseUrl;
  }

  login(payload) {
    return this.http.post(`${this.resource}/users/login/`, payload)
  }
}

export default ($axios) => (new AuthRepository($axios))
