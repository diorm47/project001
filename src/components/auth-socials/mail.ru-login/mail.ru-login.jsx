import React, { useEffect } from "react";
import mail_icon from "../../../assets/icons/auth-icons/mail-icon.png";
import { mainApi } from "../../utils/main-api";

const MailRuOAuth = ({ setMailRuData }) => {
  const redirect_url = `https://legadrop.vercel.app`;
  // const redirect_url = `http://localhost:3000`;

  const handleLogin = () => {
    const state = Math.random().toString(36).substring(7);
    localStorage.setItem("oauth_state", state);
    const authURL = `https://oauth.mail.ru/login?client_id=d522b20741184886a90d9a82ca94212c&response_type=code&redirect_uri=${redirect_url}&state=${state}`;
    window.location.href = authURL;
  };
  const fetchUserData = async (accessToken) => {
    const headersList = {
      Accept: "*/*",
    };
    const response = await fetch(
      `https://oauth.mail.ru/userinfo?access_token=${accessToken}`,
      {
        method: "GET",
        headers: headersList,
      }
    );
    const data = await response.json();
    setMailRuData(data);
  };

  const handleTokenExchange = async (code) => {
    mainApi
      .getToken(code)
      .then((userData) => {
        console.log(userData);

        fetchUserData(userData.access_token);
      })
      .catch(() => {
        return "";
      });
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    const returnedState = urlParams.get("state");

    if (returnedState) {
      (async () => {
        const accessToken = await handleTokenExchange(code);
        if (accessToken) {
          fetchUserData(accessToken);
        }
      })();
      localStorage.removeItem("oauth_state");
    }
  }, []);

  return <img src={mail_icon} alt="mail_icon" onClick={handleLogin} />;
};

export default MailRuOAuth;