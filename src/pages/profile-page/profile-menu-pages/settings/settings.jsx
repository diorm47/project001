import React, { useState } from "react";

import { ReactComponent as CopyIcon } from "../../../../assets/icons/copy-icon.svg";
import { ReactComponent as EditIcon } from "../../../../assets/icons/edit-icon.svg";
import { ReactComponent as ImageIcon } from "../../../../assets/icons/image-icon.svg";
import { ReactComponent as KeyIcon } from "../../../../assets/icons/key-icon.svg";
import { ReactComponent as MailIcon } from "../../../../assets/icons/mail-icon.svg";
import { ReactComponent as OkeyIcon } from "../../../../assets/icons/okey-icon.svg";
import { ReactComponent as ArrowIcon } from "../../../../assets/icons/right-arrow.svg";
import user_avatar from "../../../../assets/images/profile-avatar.png";
import "./settings.css";

// socials
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as GoogleIcon } from "../../../../assets/icons/auth-icons/google-icon.svg";
import mail_icon from "../../../../assets/icons/auth-icons/mail-icon.png";
import { ReactComponent as TGIcon } from "../../../../assets/icons/auth-icons/tg-login.svg";
import vk_icon from "../../../../assets/icons/auth-icons/vk-icon.png";
import { ReactComponent as YandexIcon } from "../../../../assets/icons/auth-icons/yandex-login.svg";
import { useAutoFocus } from "../../../../components/hooks/hooks";
import Snacbar from "../../../../components/snackbar/snackbar";
import { mainApi } from "../../../../components/utils/main-api";
import { copyToClipBoard } from "../../../../components/utils/utils";
import { loginUserAction } from "../../../../redux/user-reducer";

function Settings() {
  const usersData = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const [isSnackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarText, setSnackbarText] = useState("");
  const [updatingImage, setUpdatingImage] = useState(usersData.picture);
  const [updatingName, setUpdatingName] = useState(false);
  const [updatingEmail, setUpdatingEmail] = useState(false);
  const [updatingPassword, setUpdatingPassword] = useState(false);
  const [errorUpdatingPassword, setErrorUpdatingPassword] = useState(false);
  const [updatingNameValue, setUpdatingNameValue] = useState(
    usersData.username || ""
  );
  const [updatingEmailValue, setUpdatingEmailValue] = useState(
    usersData.email || ""
  );
  const [updatingPasswordValue, setUpdatingPasswordValue] = useState(
    usersData.password || ""
  );
  const [updatingPasswordValue2, setUpdatingPasswordValue2] = useState("");

  const autoFocusName = useAutoFocus(updatingName);
  const autoFocusEmail = useAutoFocus(updatingEmail);
  const autoFocusPassword = useAutoFocus(updatingPassword);

  const snackbarActions = (snackText) => {
    setSnackbarVisible(true);
    setSnackbarText(snackText);
    setTimeout(() => {
      setSnackbarVisible(false);
    }, 2000);
  };

  const setUserName = () => {
    const user = {
      username: updatingNameValue,
    };
    mainApi
      .updateUserName(user)
      .then((userData) => {
        if (userData.status !== 400) {
          snackbarActions(userData.detail);
          mainApi
            .reEnter()
            .then((res) => {
              dispatch(loginUserAction(res));
            })
            .catch((error) => {
              console.log("error", error);
            });
          setUpdatingName(false);
        } else {
          snackbarActions(userData.detail);
        }
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  };
  const setUserEmail = () => {
    const user = {
      email: updatingEmailValue,
    };
    mainApi
      .updateUserEmail(user)
      .then((userData) => {
        if (userData.status !== 400) {
          snackbarActions(userData.detail);
          mainApi
            .reEnter()
            .then((res) => {
              dispatch(loginUserAction(res));
            })
            .catch((error) => {
              console.log(error);
            });
          setUpdatingEmail(false);
        } else {
          snackbarActions(userData.detail);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const setUserPassword = () => {
    const user = {
      old_password: updatingPasswordValue,
      new_password: updatingPasswordValue2,
    };

    mainApi
      .updateUserPassword(user)
      .then((userData) => {
        if (userData.status !== 400) {
          snackbarActions(userData.detail);
          localStorage.setItem("token", userData.access_token);
          setUpdatingPassword(false);
        } else {
          snackbarActions(userData.detail);
          setErrorUpdatingPassword(true);
        }
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  };
  const saveImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setUpdatingImage(reader.result);

      const headersList = {
        Accept: "*/*",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      };
      const bodyContent = new FormData();
      bodyContent.append("picture", file);
      fetch(`${mainApi._baseUrl}/picture`, {
        method: "PUT",
        body: bodyContent,
        headers: headersList,
      })
        .then((userData) => {
          return userData.json();
        })
        .then((userData) => {
          snackbarActions(userData.detail);
          mainApi
            .reEnter()
            .then((res) => {
              dispatch(loginUserAction(res));
            })
            .catch((error) => {
              console.log("error", error);
            });
        })
        .catch((error) => {
          console.log(error);
        });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  const copyID = () => {
    copyToClipBoard(`ID: ${usersData && usersData.id ? usersData.id : "-"}`);
    snackbarActions("ID пользователя скопирован");
  };

  const setPassword = (e) => {
    setUpdatingPasswordValue(e.target.value);
    if (errorUpdatingPassword) {
      setErrorUpdatingPassword(false);
    }
  };

  return (
    <>
      {isSnackbarVisible ? (
        <Snacbar visible={isSnackbarVisible} text={snackbarText} />
      ) : (
        ""
      )}

      <div className="profile_content_wrapper ">
        <div className="ref_block_title">
          <h3>Настройки</h3>
        </div>
        <div className="user_data_settings">
          <div className="user_data_setting_content">
            <div className="settings_user_img">
              <img src={updatingImage || user_avatar} alt="" />
              <label htmlFor="user_avatar_update">
                <ImageIcon
                  className="set_user_image"
                  title="Обновить картинку"
                />
              </label>
              <input
                type="file"
                accept="image/*"
                id="user_avatar_update"
                onChange={saveImage}
              />
            </div>
            <div className="user_settings_data">
              <div className="username_setting">
                <p>
                  {usersData && usersData.username
                    ? usersData.username
                    : "user"}
                </p>
              </div>
              <div className="userid_setting">
                <p>ID: {usersData && usersData.id ? usersData.id : "-"}</p>
                <CopyIcon onClick={copyID} title="Скопировать ID" className="grey_icon" />
              </div>
            </div>
          </div>

          <div className="right_arrow">
            <ArrowIcon />
          </div>
        </div>
        <div className="updating_userdata_form">
          <div className="updating_form_item">
            <p>Имя пользователя</p>
            <div className="update_inpute">
              {updatingName ? (
                <>
                  <input
                    type="text"
                    ref={autoFocusName}
                    value={updatingNameValue}
                    onChange={(e) => setUpdatingNameValue(e.target.value)}
                  />
                  <OkeyIcon
                    onClick={setUserName}
                    title="Сохранить имя пользователья"
                    className="grey_icon"
                  />
                </>
              ) : (
                <>
                  <p>{updatingNameValue}</p>
                  <EditIcon
                    onClick={() => setUpdatingName(true)}
                    title="Изменить имя пользователья"
                    className="grey_icon"
                  />
                </>
              )}
            </div>
          </div>
          <div className="updating_form_item">
            <p>Почта</p>
            <div className="update_inpute">
              <MailIcon />

              {updatingEmail ? (
                <>
                  <input
                    type="email"
                    ref={autoFocusEmail}
                    value={updatingEmailValue}
                    onChange={(e) => setUpdatingEmailValue(e.target.value)}
                  />
                  <OkeyIcon  className="grey_icon" onClick={setUserEmail} title="Сохранить почту" />
                </>
              ) : (
                <>
                  <p>{updatingEmailValue}</p>
                  <EditIcon
                    onClick={() => setUpdatingEmail(true)}
                    title="Изменить почту"  className="grey_icon"
                  />
                </>
              )}
            </div>
          </div>
          <div
            className={
              errorUpdatingPassword
                ? "updating_form_item error_password"
                : "updating_form_item "
            }
          >
            <p> {updatingPassword ? "Ведите старый пароль" : "Пароль"} </p>
            <div className="update_inpute">
              <KeyIcon />
              {updatingPassword ? (
                <>
                  <input
                    type="text"
                    ref={autoFocusPassword}
                    value={updatingPasswordValue}
                    onChange={(e) => setPassword(e)}
                  />
                </>
              ) : (
                <>
                  <p className="default_user_password">******</p>
                  <EditIcon
                    onClick={() => setUpdatingPassword(true)}
                    title="Изменить пароль"  className="grey_icon"
                  />
                </>
              )}
            </div>
          </div>
          {updatingPassword ? (
            <div className="updating_form_item">
              <p>Ведите новый пароль</p>
              <div className="update_inpute">
                <KeyIcon />
                <input
                  type="text"
                  value={updatingPasswordValue2}
                  onChange={(e) => setUpdatingPasswordValue2(e.target.value)}
                />
                <OkeyIcon  className="grey_icon" onClick={setUserPassword} title="Сохранить пароль" />
              </div>
            </div>
          ) : (
            ""
          )}

          <div className="logined_socials_wrapper">
            <p>Способы входа</p>
            <div className="logined_social">
              <div
                className={
                  usersData.sub ? "active_logined google_icon" : "google_icon"
                }
                title="Google"
              >
                <GoogleIcon />
              </div>
              <div
                className={
                  usersData.vkontakte_id ? "active_logined vk_icon" : "vk_icon"
                }
                title="ВКонтакте"
              >
                <img src={vk_icon} alt="" />
              </div>
              <div
                title="Телеграм"
                className={usersData.telegram_id ? "active_logined" : ""}
              >
                <TGIcon />
              </div>
              <div
                title="mail.ru"
                className={usersData.mailru_id ? "active_logined" : ""}
              >
                <img src={mail_icon} alt="" />
              </div>
              <div
                title="Яндекс"
                className={usersData.yandex_id ? "active_logined" : ""}
              >
                <YandexIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Settings;
