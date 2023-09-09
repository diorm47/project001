import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ReactComponent as PolicyIcon } from "../../assets/icons/auth-icons/policy-checkbox.svg";
import { ReactComponent as PromocodeIcon } from "../../assets/icons/auth-icons/promocode-icon.svg";
import vk_icon from "../../assets/icons/auth-icons/vk-icon.png";
import { ReactComponent as ExitIcon } from "../../assets/icons/close-icon.svg";
import { loginUserAction } from "../../redux/user-reducer";
import TGLogin from "../tg-login/tg-login";
import { mainApi } from "../utils/main-api";
import MailRuOAuth from "../mail.ru-login/mail.ru-login";
import VKFloatingLoginComponent from "../vk-login/vk-login";
import YandexAuthButton from "../yandex-login/yandex-login";
import "./login-auth.css";

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
  const [MailRuData, setMailRuData] = useState({});
  // https://cors.sh
  const loginUser = () => {
    if (userPassword && userName) {
      const user = {
        auth_type: "legadrop",
        username: userName,
        password: userPassword,
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
        });
    }
  }, [dispatch, navigate, setLoginModal, yandexData]);
  useEffect(() => {
    if (vkData && vkData.id) {
      setVkOpen(false);
      const user = {
        auth_type: "vk",
        username: `${vkData.first_name} ${vkData.last_name}`,
        vkontakte_id: vkData.id,
        image: vkData.photo_400_orig,
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
        });
    }
  }, [dispatch, navigate, setLoginModal, vkData]);
  useEffect(() => {
    if (TGData && TGData.id) {
      setVkOpen(false);
      const user = {
        auth_type: "telegram",
        username: TGData.username,
        telegram_id: TGData.id,
        image: TGData.photo_url,
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
        });
    }
  }, [dispatch, navigate, setLoginModal, TGData]);

  // Mail.ru
  useEffect(() => {
    if (MailRuData && MailRuData.id) {
      const user = {
        auth_type: "mailru",
        username: MailRuData.nickname,
        mail_ru: MailRuData.id,
        image: MailRuData.image,
        email: MailRuData.email,
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
              sessionStorage.removeItem("setAuthMail");
            })
            .catch(() => {
              console.log("error");
            });
        })
        .catch((error) => {
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
                  sessionStorage.removeItem("setAuthMail");
                })
                .catch(() => {
                  console.log("error");
                });
            })
            .catch((error) => {
              console.log("error: ", error);
            });
        });
    }
  }, [dispatch, navigate, setLoginModal, MailRuData]);

  const setAuthMail = () => {
    sessionStorage.setItem("setAuthMail", "auth_mail");
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
              <div className="google_auth_btn_wrapper">
                <div className="google_auth_btn">
                  <GoogleOAuthProvider clientId="43928678507-s47ggc38cmfabet21l25g2b8s11ljiv0.apps.googleusercontent.com">
                    <GoogleLogin
                      onSuccess={(credentialResponse) => {
                        var decoded = jwt_decode(credentialResponse.credential);
                        authGoogle(decoded);
                      }}
                      type="icon"
                      shape="square"
                      size="large"
                      onError={() => {
                        console.log("Login Failed");
                      }}
                    />
                  </GoogleOAuthProvider>
                </div>
              </div>
              <img
                src={vk_icon}
                alt="vk_icon"
                onClick={() => setVkOpen(true)}
              />
              {vkOpen ? <VKFloatingLoginComponent setVkData={setVkData} /> : ""}
              <div className="tg_login_btn">
                <TGLogin setTgData={setTgData} />
              </div>

              <div className="mail_ru_btn" onClick={() => setAuthMail(true)}>
                <MailRuOAuth setMailRuData={setMailRuData} />
              </div>

              <YandexAuthButton setYandexData={setYandexData} />
              {/* <img src={x_icon} alt="x_icon" /> */}
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
