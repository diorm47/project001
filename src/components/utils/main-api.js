const mainApiOptions = {
  baseUrl: "https://legadrop.org",
  // baseUrl: "http://192.168.1.4:8000",

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
      endpoint: "/signup",
      method: "POST",
      body: userData,
    });
  }

  async signin(userData) {
    return this._sendRequest({
      endpoint: "/signin",
      method: "POST",
      body: userData,
    });
  }
  async getToken(userData) {
    return this._sendRequest({
      endpoint: `/get-mailru-token/?code=${userData}`,
      method: "POST",
      body: userData,
    });
  }
  async getTokenVK(userData) {
    return this._sendRequest({
      endpoint: `/get-vk-token/?code=${userData}`,
      method: "POST",
      body: userData,
    });
  }
  async getVKUser(userData) {
    return this._sendRequest({
      endpoint: `/get-vk-user/?access_token=${userData}`,
      method: "GET",
    });
  }
  async loginGoogle(userData) {
    return this._sendRequest({
      endpoint: "/register/google",
      method: "POST",
      body: userData,
    });
  }

  async reEnter() {
    return this._sendRequest({
      endpoint: "/user/me",
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
