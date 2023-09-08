import React, { useEffect, useState } from "react";
import axios from "axios";

const MailRuOAuth = () => {
  const [userData, setUserData] = useState(null);

  const handleLogin = () => {
    const state = Math.random().toString(36).substring(7);
    localStorage.setItem("oauth_state", state);
    const authURL = `https://oauth.mail.ru/login?client_id=d522b20741184886a90d9a82ca94212c&response_type=code&redirect_uri=https://legadrop.vercel.app&state=${state}`;
    window.location.href = authURL;
  };

  const handleTokenExchange = async (code) => {
    try {
      const headersList = {
        Accept: "*/*",
        "Content-Type": "application/x-www-form-urlencoded",
      };
      const bodyContent = `client_id=d522b20741184886a90d9a82ca94212c&client_secret=c5a202c4cf64471ebbf3a42622e6eb01&code=${code}&grant_type=authorization_code&redirect_uri=https://legadrop.vercel.app`;
      const response = await fetch("https://oauth.mail.ru/token", {
        method: "POST",
        body: bodyContent,
        headers: headersList,
      });

      const data = await response.json();
      console.log(data);

      return response.data.access_token;
    } catch (error) {
      console.error("Error during token exchange:", error);
      return null;
    }
  };

  const fetchUserData = async (accessToken) => {
    try {
      const response = await axios.get(
        `https://api.mail.ru/userinfo?access_token=${accessToken}`
      );
      setUserData(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  // Когда компонент монтируется, проверьте URL на наличие кода авторизации
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    const returnedState = urlParams.get("state");
    const savedState = localStorage.getItem("oauth_state");

    if (code && returnedState === savedState) {
      (async () => {
        const accessToken = await handleTokenExchange(code);
        if (accessToken) {
          fetchUserData(accessToken);
        }
      })();
      localStorage.removeItem("oauth_state");
    }
  }, []);
  console.log(userData);
  return (
    <div>
      <button onClick={handleLogin}>Войти через Mail.ru</button>
    </div>
  );
};

export default MailRuOAuth;
