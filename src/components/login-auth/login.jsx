import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUserAction } from "../../redux/user-reducer";
import { mainApi } from "../utils/main-api";
import { GoogleOAuthProvider } from "@react-oauth/google";
import GoogleLoginModal from "../auth-socials/google-login/google-login";

import { ReactComponent as ExitIcon } from "../../assets/icons/close-icon.svg";
import { ReactComponent as GoogleIcon } from "../../assets/icons/auth-icons/google-icon.svg";
import { ReactComponent as PasswordIcon } from "../../assets/icons/auth-icons/password-eye.svg";
import MailRuOAuth from "../auth-socials/mail.ru-login/mail.ru-login";
import TGLogin from "../auth-socials/tg-login/tg-login";
import VKFloatingLoginComponent from "../auth-socials/vk-login/vk-login";
import YandexAuthButton from "../auth-socials/yandex-login/yandex-login";
import "./login-auth.css";
import Snacbar from "../snackbar/snackbar";

function LoginModal({ setLoginModal, setAuthModalType }) {
  const [userName, setUserName] = useState("");
  const [userPassword, setPassword] = useState("");
  const [fakeGoogle, setRealGoogle] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const [isSnackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarText, setSnackbarText] = useState("");
  const [vkData, setVkData] = useState({});
  const [yandexData, setYandexData] = useState({});
  const [TGData, setTgData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const snackbarActions = (snackText) => {
    setSnackbarVisible(true);
    setSnackbarText(snackText);
    setTimeout(() => {
      setSnackbarVisible(false);
    }, 2000);
  };

  useEffect(() => {
    setTimeout(() => {
      setRealGoogle(true);
    }, 700);
  });

  const loginUser = () => {
    if (userName && userPassword) {
      const user = {
        email: userName,
        password: userPassword,
      };
      mainApi
        .loginAction(user)
        .then((userData) => {
          if (userData.status !== 400) {
            localStorage.setItem("token", userData.access_token);
            const user = {
              is_logged: true,
            };
            dispatch(loginUserAction(user));
            snackbarActions(userData.detail);
            setLoginModal(false);
          } else {
            snackbarActions(userData.detail);
          }
        })

        .catch((error) => {
          console.log("error: ", error);
        });
    }
  };

  const authGoogle = (data) => {
    mainApi
      .authGoogleAction(data)
      .then((res) => {
        localStorage.setItem("token", res.access_token);
        const is_logged = {
          is_logged: true,
        };

        dispatch(loginUserAction(is_logged));
        dispatch(loginUserAction(res.user));
        setLoginModal(false);
      })
      .catch((error) => {
        console.log("google error");
      });
  };
  useEffect(() => {
    if (vkData && vkData.id) {
      const user = {
        username: `${vkData.first_name}_${vkData.last_name}`,
        vkontakte_id: vkData.id,
        picture: vkData.avatar,
      };

      mainApi
        .authVKAction(user)
        .then((userData) => {
          localStorage.setItem("token", userData.access_token);
          const is_logged = {
            is_logged: true,
          };
          dispatch(loginUserAction(is_logged));
          dispatch(loginUserAction(userData.user));
          setLoginModal(false);
        })
        .catch(() => {
          console.log("error");
        });
    }
  }, [dispatch, navigate, setLoginModal, vkData]);
  useEffect(() => {
    if (TGData && TGData.id) {
      const user = {
        username: TGData.username,
        telegram_id: TGData.id,
        picture: TGData.photo_url,
      };

      mainApi
        .authTGAction(user)
        .then((userData) => {
          localStorage.setItem("token", userData.access_token);
          const user = {
            is_logged: true,
          };
          dispatch(loginUserAction(user));
          dispatch(loginUserAction(userData.user));
          setLoginModal(false);
        })
        .catch((error) => {
          console.log("error");
        });
    }
  }, [dispatch, navigate, setLoginModal, TGData]);

  useEffect(() => {
    if (yandexData && yandexData.id) {
      const user = {
        yandex_id: yandexData.id,
        email: yandexData.default_email,
        picture: `https://avatars.yandex.net/get-yapic/${yandexData.default_avatar_id}/islands-200`,
        username: yandexData.login,
      };
      mainApi
        .authYandexAction(user)
        .then((userData) => {
          localStorage.setItem("token", userData.access_token);
          const user = {
            is_logged: true,
          };
          dispatch(loginUserAction(user));
          dispatch(loginUserAction(userData.user));
          setLoginModal(false);
        })
        .catch((error) => {
          console.log("error");
        });
    }
  }, [dispatch, navigate, setLoginModal, yandexData]);

  return (
    <>
      {isSnackbarVisible ? (
        <Snacbar visible={isSnackbarVisible} text={snackbarText} />
      ) : (
        ""
      )}
      <div className="modal_wrapper_template">
        <div className="modal_template login_modal">
          <div className="modal_header">
            <p className="modal_title">Вход</p>
            <button
              className="modal_closer"
              onClick={() => setLoginModal(false)}
            >
              <ExitIcon />
            </button>
          </div>
          <p className="login_greeting">Добро пожаловать в LegaDrop</p>
          <div className="auth_wrapper">
            <div className="auth_content">
              <div className="auth_socials">
                <div className="google_auth_btn_wrapper">
                  <div className="google_auth_btn">
                    <GoogleIcon
                      className={fakeGoogle ? "display_none" : "google_fake"}
                    />
                    <GoogleOAuthProvider clientId="1039025715188-jf51ia90k11f4fvjfcc61vpi81qmb84a.apps.googleusercontent.com">
                      <GoogleLoginModal authGoogle={authGoogle} />
                    </GoogleOAuthProvider>
                  </div>
                </div>

                <VKFloatingLoginComponent
                  setVkData={setVkData}
                  setLoginModal={setLoginModal}
                />

                <div className="tg_login_btn">
                  <TGLogin setTgData={setTgData} />
                </div>
                <MailRuOAuth setLoginModal={setLoginModal} />
                <YandexAuthButton setYandexData={setYandexData} />
              </div>

              <div className="login_selection">
                <div className="or_line"></div>
                <p>ИЛИ</p>
                <div className="or_line"></div>
              </div>
              <div className="aouth_login_inputs">
                <input
                  type="email"
                  name="username"
                  className="aouth_login_input"
                  placeholder="Email / Логин"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
                <div className="auth_password_input">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    className="aouth_login_input"
                    placeholder="Пароль"
                    name="password"
                    value={userPassword}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <PasswordIcon
                    onClick={() => setPasswordVisible(!passwordVisible)}
                    className={
                      passwordVisible
                        ? "hide_password active_auth_password"
                        : "hide_password"
                    }
                  />
                </div>
              </div>
            </div>
            <div className="password_recovery_btn">
              <p>Забыли пароль?</p>
            </div>

            <button className="submit_btn" onClick={loginUser}>
              ВОЙТИ
            </button>
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
    </>
  );
}

export default LoginModal;
