const mainApiOptions = {
  baseUrl: "https://legadrop.org",

  headers: {
    Accept: "*/*",
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
    });

    return this._checkResponseStatus(res);
  }

  // Sign actions list
  async authorizationAction(userData) {
    return this._sendRequest({
      endpoint: `/auth/legadrop`,
      method: "POST",
      body: userData,
    });
  }
  async loginAction(userData) {
    return this._sendRequest({
      endpoint: `/login/legadrop`,
      method: "POST",
      body: userData,
    });
  }

  // Socials auth/login
  async authGoogleAction(userData) {
    return this._sendRequest({
      endpoint: `/auth/google`,
      method: "POST",
      body: userData,
    });
  }
  async authVKAction(userData) {
    return this._sendRequest({
      endpoint: `/auth/vk`,
      method: "POST",
      body: userData,
    });
  }
  async getTokenVK(userData) {
    return this._sendRequest({
      endpoint: `/auth/vk/token/?access_token=${userData}`,
      method: "POST",
    });
  }
  async authTGAction(userData) {
    return this._sendRequest({
      endpoint: "/auth/telegram",
      method: "POST",
      body: userData,
    });
  }
  async authMailruAction(userData) {
    return this._sendRequest({
      endpoint: `/auth/mailru`,
      method: "POST",
      body: userData,
    });
  }
  async authYandexAction(userData) {
    return this._sendRequest({
      endpoint: `/auth/yandex`,
      method: "POST",
      body: userData,
    });
  }

  // User me
  async reEnter() {
    return this._sendRequest({
      endpoint: "/user/me",
      requiresToken: true,
    });
  }

  // update user data
  async updateUserName(userData) {
    return this._sendRequest({
      endpoint: `/username`,
      method: "PUT",
      body: userData,
      requiresToken: true,
    });
  }
  async updateUserEmail(userData) {
    return this._sendRequest({
      endpoint: `/email`,
      method: "PUT",
      body: userData,
      requiresToken: true,
    });
  }
  async updateUserPassword(userData) {
    return this._sendRequest({
      endpoint: `/password`,
      method: "PUT",
      body: userData,
      requiresToken: true,
    });
  }
  // Get all Cases
  async getAllCases() {
    return this._sendRequest({
      endpoint: `/admin/cases`,
      method: "GET",
      // requiresToken: true,
    });
  }

  // Get case Items
  async getCaseItems(id) {
    return this._sendRequest({
      endpoint: `/admin/case/${id}/items`,
      method: "GET",
      // requiresToken: true,
    });
  }

  // Get case Items
  async caseRandomizer(data) {
    return this._sendRequest({
      endpoint: `/randomaizer/case/opening`,
      method: "POST",
      body: data,
      // requiresToken: true,
    });
  }
}

export const mainApi = new MainApi(mainApiOptions);
