import React, { useState } from "react";
import "./login-auth.css";
import { ReactComponent as ExitIcon } from "../../assets/icons/close-icon.svg";
import { ReactComponent as YandexIcon } from "../../assets/icons/auth-icons/yandex-login.svg";
import { ReactComponent as TgIcon } from "../../assets/icons/auth-icons/tg-login.svg";

import google_icon from "../../assets/icons/auth-icons/google-icon.png";
import vk_icon from "../../assets/icons/auth-icons/vk-icon.png";
import telegram_icon from "../../assets/icons/auth-icons/tg-icon.png";
import mail_icon from "../../assets/icons/auth-icons/mail-icon.png";
import yandex_icon from "../../assets/icons/auth-icons/yandex-icon.png";
import x_icon from "../../assets/icons/auth-icons/x-icon.png";

function LoginModal({ setLoginModal, setAuthModalType }) {
  const [authTypeToggle, setAuthType] = useState("email");
  const [activePromocode, setActivePromocode] = useState(false);
  const [checkedPolicy, setCheckedPolicy] = useState(false);

  return (
    <div className="modal_wrapper_template">
      <div className="modal_template login_modal">
        <div className="modal_header">
          <p className="modal_title">Вход</p>
          <button className="modal_closer" onClick={() => setLoginModal(false)}>
            <ExitIcon />
          </button>
        </div>
        <p className="login_greeting">Добро пожаловать в LegaDrop</p>
        <div className="auth_wrapper">
          <div className="auth_content">
            <div className="auth_socials">
              <img src={google_icon} alt="google_icon" />
              <img src={vk_icon} alt="vk_icon" />

              <TgIcon />

              <img src={mail_icon} alt="mail_icon" />
              <YandexIcon />
            </div>
            <div className="login_selection">
              <div className="or_line"></div>
              <p>ИЛИ</p>
              <div className="or_line"></div>
            </div>
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
          </div>
          <div className="password_recovery_btn">
            <p>Забыли пароль?</p>
          </div>

          <button className="submit_btn">ВОЙТИ</button>
          <div className="auth_types">
            <p>
              Еще нет аккаунта?{" "}
              <span onClick={() => setAuthModalType(false)}>
                Зарегистрируйтесь
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
