import React from "react";
import { ReactComponent as ExitIcon } from "../../assets/icons/close-icon.svg";
import { ReactComponent as CopyIcon } from "../../assets/icons/copy-icon.svg";
import { ReactComponent as DownloadIcon } from "../../assets/icons/download-icon.svg";
import "../login-auth/login-auth.css";
import "./success-auth-modal.css";
import { copyToClipBoard, saveAsTxtFile } from "../utils/utils";
import Snacbar from "../snackbar/snackbar";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUserAction } from "../../redux/user-reducer";

function SuccesAuthModal({ setSuccessLoginModal }) {
  const usersData = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const [isSnackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarText, setSnackbarText] = useState("");

  const credentials = `Логин: ${usersData.username || ""}\nПароль: ${
    usersData.password || ""
  }`;

  const handleCopyClick = () => {
    copyToClipBoard(credentials);
    setSnackbarVisible(true);
    setSnackbarText("Логин и пароль скопирован");
    setTimeout(() => {
      setSnackbarVisible(false);
    }, 1500);
  };

  const handleDownloadClick = () => {
    saveAsTxtFile("Legadrop credentials.txt", credentials);
  };

  const exitButton = () => {
    setSuccessLoginModal(false);
    const user = {
      password: null,
    };
    dispatch(loginUserAction(user));
  };
  return (
    <>
      {isSnackbarVisible ? (
        <Snacbar visible={isSnackbarVisible} text={snackbarText} />
      ) : (
        ""
      )}
      <div className="modal_wrapper_template">
        <div className="modal_template success_auth_modal">
          <div className="modal_header">
            <p className="modal_title">Регистрация прошла успешно</p>
            <button className="modal_closer" onClick={exitButton}>
              <ExitIcon />
            </button>
          </div>
          <div className="success_auth_modal_content">
            <p className="succes_auth_description">
              Сохраните логин и пароль, чтобы не забыть их
            </p>
            <div className="success_user_data">
              <div className="success_user_data_block">
                <p>Логин</p>
                <span>{usersData.username || ""}</span>
                <div>|</div>
                <p>Пароль</p>
                <span>{usersData.password || ""}</span>
              </div>
              <div className="succes_user_actions">
                <div className="succes_user_action" onClick={handleCopyClick}>
                  <CopyIcon />
                </div>
                <div
                  className="succes_user_action"
                  onClick={handleDownloadClick}
                >
                  <DownloadIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SuccesAuthModal;
