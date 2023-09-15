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
import { ReactComponent as GoogleIcon } from "../../../../assets/icons/auth-icons/google-icon.svg";
import mail_icon from "../../../../assets/icons/auth-icons/mail-icon.png";
import { ReactComponent as TGIcon } from "../../../../assets/icons/auth-icons/tg-login.svg";
import vk_icon from "../../../../assets/icons/auth-icons/vk-icon.png";
import { ReactComponent as YandexIcon } from "../../../../assets/icons/auth-icons/yandex-login.svg";
import { useAutoFocus } from "../../../../components/hooks/hooks";
import Snacbar from "../../../../components/snackbar/snackbar";
import { useSelector } from "react-redux";

function Settings() {
  const usersData = useSelector((state) => state.user.user);

  const [isSnackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarText, setSnackbarText] = useState("");

  const [updatingImage, setUpdatingImage] = useState();
  const [updatingName, setUpdatingName] = useState(false);
  const [updatingEmail, setUpdatingEmail] = useState(false);
  const [updatingPassword, setUpdatingPassword] = useState(false);
  const [updatingNameValue, setUpdatingNameValue] = useState(
    usersData.username || ""
  );
  const [updatingEmailValue, setUpdatingEmailValue] = useState(
    usersData.email || ""
  );
  const [updatingPasswordValue, setUpdatingPasswordValue] =
    useState("password123");

  const autoFocusName = useAutoFocus(updatingName);
  const autoFocusEmail = useAutoFocus(updatingEmail);
  const autoFocusPassword = useAutoFocus(updatingPassword);

  const setUserName = () => {
    setUpdatingName(false);
  };
  const setUserEmail = () => {
    setUpdatingEmail(false);
  };
  const setUserPassword = () => {
    setUpdatingPassword(false);
  };

  const saveImage = (e) => {
    const file = e.target.files[0];
    // setEmployerAvatarForSend(e.target.files[0]);
    const reader = new FileReader();

    reader.onloadend = () => {
      setUpdatingImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  const copyID = () => {
    setSnackbarVisible(true);
    setSnackbarText("ID пользователя скопирован");
    setTimeout(() => {
      setSnackbarVisible(false);
    }, 1500);
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
              <img src={usersData.picture || user_avatar} alt="" />
              <label htmlFor="user_avatar_update">
                <ImageIcon className="set_user_image" />
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
                <CopyIcon onClick={copyID} />
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
                  <OkeyIcon onClick={setUserName} />
                </>
              ) : (
                <>
                  <p>{usersData.username || ""}</p>
                  <EditIcon onClick={() => setUpdatingName(true)} />
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
                  <OkeyIcon onClick={setUserEmail} />
                </>
              ) : (
                <>
                  <p>{usersData.email || ""}</p>
                  <EditIcon onClick={() => setUpdatingEmail(true)} />
                </>
              )}
            </div>
          </div>
          <div className="updating_form_item">
            <p>Пароль</p>
            <div className="update_inpute">
              <KeyIcon />
              {updatingPassword ? (
                <>
                  <input
                    type="text"
                    ref={autoFocusPassword}
                    value={updatingPasswordValue}
                    onChange={(e) => setUpdatingPasswordValue(e.target.value)}
                  />
                  <OkeyIcon onClick={setUserPassword} />
                </>
              ) : (
                <>
                  <p>password123</p>
                  <EditIcon onClick={() => setUpdatingPassword(true)} />
                </>
              )}
            </div>
          </div>
          <div className="logined_socials_wrapper">
            <p>Способы входа</p>
            <div className="logined_social">
              <div
                className={
                  usersData.sub ? "active_logined google_icon" : "google_icon"
                }
              >
                <GoogleIcon />
              </div>
              <div
                className={
                  usersData.vkontakte_id ? "active_logined vk_icon" : "vk_icon"
                }
              >
                <img src={vk_icon} alt="" />
              </div>
              <div className={usersData.telegram_id ? "active_logined" : ""}>
                <TGIcon />
              </div>
              <div className={usersData.mailru_id ? "active_logined" : ""}>
                <img src={mail_icon} alt="" />
              </div>
              <div className={usersData.yandex_id ? "active_logined" : ""}>
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
