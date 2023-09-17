import React, { useEffect } from "react";
import mail_icon from "../../../assets/icons/auth-icons/mail-icon.png";
import { mainApi } from "../../utils/main-api";
import { loginUserAction } from "../../../redux/user-reducer";
import { useDispatch } from "react-redux";

const MailRuOAuth = ({ setMailRuData, setLoginModal }) => {
  const dispatch = useDispatch();

  // const redirect_url = `https://legadrop.vercel.app`;
  const redirect_url = `http://localhost:3000`;

  const handleLogin = () => {
    const state = Math.random().toString(36).substring(7);
    localStorage.setItem("oauth_state", state);
    const authURL = `https://oauth.mail.ru/login?client_id=d522b20741184886a90d9a82ca94212c&response_type=code&redirect_uri=${redirect_url}&state=${state}`;
    window.location.href = authURL;
  };

  const handleTokenExchange = async (code) => {
    const data = {
      code: code,
    };
    mainApi
      .authMailruAction(data)
      .then((userData) => {
        setMailRuData(userData);
        localStorage.setItem("token", userData.access_token);
        const user = {
          is_logged: true,
        };
        dispatch(loginUserAction(user));
        dispatch(loginUserAction(userData.user));
        setLoginModal(false);
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
          handleTokenExchange(accessToken);
        }
      })();
      localStorage.removeItem("oauth_state");
    }
  }, []);

  return <img src={mail_icon} alt="mail_icon" onClick={handleLogin} />;
};

export default MailRuOAuth;
