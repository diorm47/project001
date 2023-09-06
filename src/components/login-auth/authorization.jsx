import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import React, { useState } from "react";
import { ReactComponent as PolicyIcon } from "../../assets/icons/auth-icons/policy-checkbox.svg";
import { ReactComponent as PromocodeIcon } from "../../assets/icons/auth-icons/promocode-icon.svg";
import { ReactComponent as ExitIcon } from "../../assets/icons/close-icon.svg";
import "./login-auth.css";

import TelegramLoginButton from "react-telegram-login";
import mail_icon from "../../assets/icons/auth-icons/mail-icon.png";
import vk_icon from "../../assets/icons/auth-icons/vk-icon.png";
import x_icon from "../../assets/icons/auth-icons/x-icon.png";
import yandex_icon from "../../assets/icons/auth-icons/yandex-icon.png";
import { mainApi } from "../utils/main-api";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUserAction } from "../../redux/user-reducer";

function AuthorizationModal({ setLoginModal, setAuthModalType }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [authTypeToggle, setAuthType] = useState("email");
  const [activePromocode, setActivePromocode] = useState(false);
  const [checkedPolicy, setCheckedPolicy] = useState(false);
  const [userName, setUserName] = useState("");
  const [userPassword, setPassword] = useState("");
  const handleTelegramResponse = (response) => {
    console.log(response);
  };

  const user = {
    username: userName,
    password: userPassword,
  };
  const loginUser = () => {
    if (userPassword && userName) {
      mainApi
        .signup(user)
        .then((userData) => {
          localStorage.setItem("token", userData.access_token);
          const user = {
            is_logged: true,
          };
          dispatch(loginUserAction(user));
          mainApi
            .reEnter()
            .then((res) => {
              dispatch(loginUserAction(res));
              setLoginModal(false);
              navigate("/profile");
            })
            .catch(() => {
              console.log("error");
            });
        })
        .catch((error) => {
          console.log("error: ", error);
        });
    }
  };
  return (
    <div className="modal_template authorization_modal">
      <div className="modal_header">
        <p className="modal_title">Регистрация</p>
        <button className="modal_closer" onClick={() => setLoginModal(false)}>
          <ExitIcon />
        </button>
      </div>
      <div className="auth_wrapper">
        <div className="auth_togglers">
          <div
            onClick={() => setAuthType("fast")}
            className={`auth_toggle_button ${
              authTypeToggle === "fast" ? "active_auth_type" : ""
            }`}
          >
            Быстрая
          </div>
          <div
            onClick={() => setAuthType("email")}
            className={`auth_toggle_button ${
              authTypeToggle === "email" ? "active_auth_type" : ""
            }`}
          >
            Через e-mail
          </div>
        </div>
        <div className="auth_content">
          {authTypeToggle === "email" ? (
            <div className="aouth_login_inputs">
              <input
                type="text"
                className="aouth_login_input"
                placeholder="Email / Логин"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              <input
                type="text"
                className="aouth_login_input"
                placeholder="Пароль"
                value={userPassword}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          ) : (
            <div className="auth_socials">
              <GoogleOAuthProvider clientId="43928678507-s47ggc38cmfabet21l25g2b8s11ljiv0.apps.googleusercontent.com">
                <GoogleLogin
                  onSuccess={(credentialResponse) => {
                    var decoded = jwt_decode(credentialResponse.credential);
                    console.log(decoded);
                  }}
                  type="icon"
                  shape="square"
                  width="100"
                  size="large"
                  onError={() => {
                    console.log("Login Failed");
                  }}
                />
              </GoogleOAuthProvider>
              <img src={vk_icon} alt="vk_icon" />
              <div className="tg_login_button">
                <TelegramLoginButton
                  dataOnauth={handleTelegramResponse}
                  id="tg_login_button"
                  botName="GGLegadropbot"
                />
              </div>

              <img src={mail_icon} alt="mail_icon" />
              <img src={yandex_icon} alt="yandex_icon" />
              <img src={x_icon} alt="x_icon" />
            </div>
          )}
        </div>

        <div className="promocode_block">
          {!activePromocode ? (
            <div onClick={() => setActivePromocode(true)}>
              <p>Промокод</p>
              <PromocodeIcon />
            </div>
          ) : (
            <input type="text" placeholder="Введите промокод" />
          )}
        </div>
        <div className="policy_block">
          {!checkedPolicy ? (
            <div
              className="not_checked"
              onClick={() => setCheckedPolicy(true)}
            ></div>
          ) : (
            <div
              className="checked_policy"
              onClick={() => setCheckedPolicy(false)}
            >
              <PolicyIcon />
            </div>
          )}

          <p>
            Я подтверждаю, что я ознакомлен и полностью согласен с{" "}
            <a href="#">Условиями Соглашения об использовании сайта</a>
          </p>
        </div>
        <button className="submit_btn" onClick={loginUser}>
          ЗАРЕГИСТРИРОВАТЬСЯ
        </button>
        <div className="auth_types">
          <p>
            Уже есть аккаунт?{" "}
            <span onClick={() => setAuthModalType(true)}>Войти</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AuthorizationModal;
