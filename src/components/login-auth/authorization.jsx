import { GoogleOAuthProvider } from "@react-oauth/google";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ReactComponent as GoogleIcon } from "../../assets/icons/auth-icons/google-icon.svg";
import { ReactComponent as PasswordIcon } from "../../assets/icons/auth-icons/password-eye.svg";
import { ReactComponent as PolicyIcon } from "../../assets/icons/auth-icons/policy-checkbox.svg";
import { ReactComponent as PromocodeIcon } from "../../assets/icons/auth-icons/promocode-icon.svg";
import { ReactComponent as ExitIcon } from "../../assets/icons/close-icon.svg";
import { loginUserAction } from "../../redux/user-reducer";
import GoogleLoginModal from "../auth-socials/google-login/google-login";
import MailRuOAuth from "../auth-socials/mail.ru-login/mail.ru-login";
import TGLogin from "../auth-socials/tg-login/tg-login";
import VKFloatingLoginComponent from "../auth-socials/vk-login/vk-login";
import YandexAuthButton from "../auth-socials/yandex-login/yandex-login";
import { mainApi } from "../utils/main-api";
import "./login-auth.css";
import Snacbar from "../snackbar/snackbar";

function AuthorizationModal({ setLoginModal, setAuthModalType }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [vkData, setVkData] = useState({});
  const [yandexData, setYandexData] = useState({});
  const [TGData, setTgData] = useState({});
  const [authTypeToggle, setAuthType] = useState("email");
  const [activePromocode, setActivePromocode] = useState(false);
  const [checkedPolicy, setCheckedPolicy] = useState(true);
  const [userName, setUserName] = useState("");
  const [userPassword, setPassword] = useState("");
  const [userPassword2, setPassword2] = useState("");
  const [userPasswordError, setPasswordError] = useState(false);

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordVisible2, setPasswordVisible2] = useState(false);
  const [isSnackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarText, setSnackbarText] = useState("");

  const [fakeGoogle, setRealGoogle] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setRealGoogle(true);
    }, 700);
  });
  useEffect(() => {
    if (userPasswordError && userPassword === userPassword2) {
      setPasswordError(false);
    }
  }, [userPassword, userPassword2, userPasswordError]);

  const snackbarActions = (snackText) => {
    setSnackbarVisible(true);
    setSnackbarText(snackText);
    setTimeout(() => {
      setSnackbarVisible(false);
    }, 2000);
  };

  const authUser = () => {
    if (userName && userPassword) {
      const user = {
        email: userName,
        password: userPassword,
      };
      if (userPassword === userPassword2) {
        setPasswordError(false);
        mainApi
          .authorizationAction(user)
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
      } else {
        snackbarActions("Пароли не совпадают!");
        setPasswordError(true);
      }
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
                  type="email"
                  className="aouth_login_input"
                  placeholder="Email / Логин"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
                <div
                  className={
                    userPasswordError
                      ? "auth_password_input error_auth_password"
                      : "auth_password_input"
                  }
                >
                  <input
                    type={passwordVisible ? "text" : "password"}
                    className="aouth_login_input"
                    placeholder="Пароль"
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
                {userPassword ? (
                  <div
                    className={
                      userPasswordError
                        ? "auth_password_input error_auth_password"
                        : "auth_password_input"
                    }
                  >
                    <input
                      type={passwordVisible2 ? "text" : "password"}
                      className="aouth_login_input"
                      placeholder="Подтвердите пароль"
                      value={userPassword2}
                      onChange={(e) => setPassword2(e.target.value)}
                    />
                    <PasswordIcon
                      onClick={() => setPasswordVisible2(!passwordVisible2)}
                      className={
                        passwordVisible2
                          ? "hide_password active_auth_password"
                          : "hide_password"
                      }
                    />
                  </div>
                ) : (
                  ""
                )}
              </div>
            ) : (
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
          <button className="submit_btn" onClick={authUser}>
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
    </>
  );
}

export default AuthorizationModal;
