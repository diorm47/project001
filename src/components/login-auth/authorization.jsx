import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import mail_icon from "../../assets/icons/auth-icons/mail-icon.png";
import { ReactComponent as PolicyIcon } from "../../assets/icons/auth-icons/policy-checkbox.svg";
import { ReactComponent as PromocodeIcon } from "../../assets/icons/auth-icons/promocode-icon.svg";
import vk_icon from "../../assets/icons/auth-icons/vk-icon.png";
import x_icon from "../../assets/icons/auth-icons/x-icon.png";
import yandex_icon from "../../assets/icons/auth-icons/yandex-icon.png";
import { ReactComponent as ExitIcon } from "../../assets/icons/close-icon.svg";
import { loginUserAction } from "../../redux/user-reducer";
import TGLogin from "../tg-login/tg-login";
import { mainApi } from "../utils/main-api";
import VKFloatingLoginComponent from "../vk-login/vk-login";
import "./login-auth.css";
import YandexAuthButton from "../yandex-login/yandex-login";

function AuthorizationModal({ setLoginModal, setAuthModalType }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [vkData, setVkData] = useState({});
  const [yandexData, setYandexData] = useState({});
  const [TGData, setTgData] = useState({});
  const [vkOpen, setVkOpen] = useState(false);
  const [authTypeToggle, setAuthType] = useState("email");
  const [activePromocode, setActivePromocode] = useState(false);
  const [checkedPolicy, setCheckedPolicy] = useState(false);
  const [userName, setUserName] = useState("");
  const [userPassword, setPassword] = useState("");

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

  const authGoogle = (userData) => {
    const data = {
      auth_type: "google",
      email: userData.email,
      username: userData.name,
      image: userData.picture,
      google_sub: userData.sub,
    };
    mainApi
      .signup(data)
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
        username: yandexData.login,
        yandex_id: yandexData.id,
        email: yandexData.default_email,
        image: `https://avatars.yandex.net/get-yapic/${yandexData.default_avatar_id}`,
      };

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
        image: vkData.avatar,
      };

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
              <img src={x_icon} alt="x_icon" />
            </div>
          )}
        </div>
        {vkOpen ? <VKFloatingLoginComponent setVkData={setVkData} /> : ""}
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
