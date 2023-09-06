import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import React from "react";
import { ReactComponent as YandexIcon } from "../../assets/icons/auth-icons/yandex-login.svg";
import { ReactComponent as ExitIcon } from "../../assets/icons/close-icon.svg";
import "./login-auth.css";
import { TLoginButton, TLoginButtonSize } from "react-telegram-auth";
import mail_icon from "../../assets/icons/auth-icons/mail-icon.png";
import vk_icon from "../../assets/icons/auth-icons/vk-icon.png";

function LoginModal({ setLoginModal, setAuthModalType }) {
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

              <TLoginButton
                botName="GGLegadropbot"
                buttonSize={TLoginButtonSize.Large}
                lang="en"
                usePic={false}
                cornerRadius={5}
                onAuthCallback={(user) => {
                  console.log("Hello, user!", user);
                }}
                requestAccess={"write"}
                additionalClasses={"css-class-for-wrapper"}
              />
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
