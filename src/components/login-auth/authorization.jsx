import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import React, { useState } from "react";
import { ReactComponent as PolicyIcon } from "../../assets/icons/auth-icons/policy-checkbox.svg";
import { ReactComponent as PromocodeIcon } from "../../assets/icons/auth-icons/promocode-icon.svg";
import { ReactComponent as ExitIcon } from "../../assets/icons/close-icon.svg";
import "./login-auth.css";

import mail_icon from "../../assets/icons/auth-icons/mail-icon.png";
import telegram_icon from "../../assets/icons/auth-icons/tg-icon.png";
import vk_icon from "../../assets/icons/auth-icons/vk-icon.png";
import x_icon from "../../assets/icons/auth-icons/x-icon.png";
import yandex_icon from "../../assets/icons/auth-icons/yandex-icon.png";

function AuthorizationModal({ setLoginModal, setAuthModalType }) {
  const [authTypeToggle, setAuthType] = useState("email");
  const [activePromocode, setActivePromocode] = useState(false);
  const [checkedPolicy, setCheckedPolicy] = useState(false);

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
              />
              <input
                type="text"
                className="aouth_login_input"
                placeholder="Пароль"
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
              <img src={telegram_icon} alt="telegram_icon" />
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
        <button className="submit_btn">ЗАРЕГИСТРИРОВАТЬСЯ</button>
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
