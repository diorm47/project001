import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import mail_icon from "../../assets/icons/auth-icons/mail-icon.png";
import vk_icon from "../../assets/icons/auth-icons/vk-icon.png";

import { ReactComponent as ExitIcon } from "../../assets/icons/close-icon.svg";
import { loginUserAction } from "../../redux/user-reducer";
import TGLogin from "../tg-login/tg-login";
import { mainApi } from "../utils/main-api";
import VKFloatingLoginComponent from "../vk-login/vk-login";
import "./login-auth.css";
import YandexAuthButton from "../yandex-login/yandex-login";

function LoginModal({ setLoginModal, setAuthModalType }) {
  const [userName, setUserName] = useState("");
  const [userPassword, setPassword] = useState("");

  const [vkData, setVkData] = useState({});
  const [yandexData, setYandexData] = useState({});
  const [TGData, setTgData] = useState({});

  const [vkOpen, setVkOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = {
    username: userName,
    password: userPassword,
  };
  const loginUser = () => {
    if (userName && userPassword) {
      mainApi
        .signin(user)
        .then((userData) => {
          localStorage.setItem("token", userData.access_token);
          const user = {
            is_logged: true,
          };
          dispatch(loginUserAction(user));
          mainApi
            .reEnter()
            .then((res) => {
              setLoginModal(false);
              navigate("/profile");
              dispatch(loginUserAction(res));
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

  const authGoogle = (userData) => {
    const data = {
      auth_type: "google",
      email: userData.email,
      google_sub: userData.sub,
    };
    mainApi
      .signin(data)
      .then((res) => {
        localStorage.setItem("token", res.access_token);
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
          .catch((error) => {
            console.log("error0", error);
          });
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  useEffect(() => {
    if (yandexData && yandexData.id) {
      const user = {
        auth_type: "yandex",
        yandex_id: yandexData.id,
        email: yandexData.default_email,
      };

      mainApi
        .signin(user)
        .then((userData) => {
          localStorage.setItem("token", userData.access_token);
          const user = {
            is_logged: true,
          };
          dispatch(loginUserAction(user));
          mainApi
            .reEnter()
            .then((res) => {
              setLoginModal(false);
              navigate("/profile");
              dispatch(loginUserAction(res));
            })
            .catch(() => {
              console.log("error");
            });
        })
        .catch((error) => {
          console.log("error: ", error);
        });
    }
  }, [dispatch, navigate, setLoginModal, yandexData]);
  useEffect(() => {
    if (vkData && vkData.id) {
      setVkOpen(false);
      const user = {
        auth_type: "vk",
        username: vkData.first_name,
        vkontakte_id: vkData.id,
      };

      mainApi
        .signin(user)
        .then((userData) => {
          localStorage.setItem("token", userData.access_token);
          const user = {
            is_logged: true,
          };
          dispatch(loginUserAction(user));
          mainApi
            .reEnter()
            .then((res) => {
              setLoginModal(false);
              navigate("/profile");
              dispatch(loginUserAction(res));
            })
            .catch(() => {
              console.log("error");
            });
        })
        .catch((error) => {
          console.log("error: ", error);
        });
    }
  }, [dispatch, navigate, setLoginModal, vkData]);

  console.log(TGData);
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
                    authGoogle(decoded);
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
              <img
                src={vk_icon}
                alt="vk_icon"
                onClick={() => setVkOpen(true)}
              />
              <TGLogin setTgData={setTgData} />
              <img src={mail_icon} alt="mail_icon" />
              <YandexAuthButton setYandexData={setYandexData} />
            </div>
            {vkOpen ? <VKFloatingLoginComponent setVkData={setVkData} /> : ""}

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
  );
}

export default LoginModal;
