const mainApiOptions = {
  baseUrl: "http://192.168.1.4:8000",
  headers: {
    "Content-Type": "application/json",
  },
};

class MainApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResponseStatus(response) {
    return response.ok
      ? response.json()
      : response.json().then((err) => Promise.reject(err.message));
  }

  async _sendRequest({
    endpoint,
    method = "GET",
    body,
    requiresToken = false,
  }) {
    const headers = { ...this._headers };

    if (requiresToken) {
      headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
    }

    const res = await fetch(`${this._baseUrl}${endpoint}`, {
      method,
      headers,
      body: JSON.stringify(body),
      credentials: "include",
    });

    return this._checkResponseStatus(res);
  }

  async signup(userData) {
    return this._sendRequest({
      endpoint: "/register/",
      method: "POST",
      body: userData,
    });
  }

  async signin(userData) {
    return this._sendRequest({
      endpoint: "/token",
      method: "POST",
      body: userData,
    });
  }

  async reEnter() {
    return this._sendRequest({
      endpoint: "/users/me",
      requiresToken: true,
    });
  }

  async editUserData(userData) {
    return this._sendRequest({
      endpoint: "/users/me",
      method: "PATCH",
      body: userData,
      requiresToken: true,
    });
  }

  async logoutUser() {
    return this._sendRequest({
      endpoint: "/signout",
      requiresToken: true,
    });
  }
}

export const mainApi = new MainApi(mainApiOptions);
