import { Config, Connect, ConnectEvents } from "@vkontakte/superappkit";
import React, { useEffect } from "react";
import vk_icon from "../../../assets/icons/auth-icons/vk-icon.png";
import { mainApi } from "../../utils/main-api";
import { useDispatch } from "react-redux";
import { loginUserAction } from "../../../redux/user-reducer";
import { useNavigate } from "react-router-dom";

function VKFloatingLoginComponent({ setVkData, setLoginModal }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const token = window.location.hash.substring(1).split("=")[1];
    if (token) {
      fetchTokenAndUserData(token);
    }
  }, []);

  const fetchTokenAndUserData = async (code) => {
    mainApi
      .getTokenVK(code)
      .then((userData) => {
        localStorage.setItem("token", userData.access_token);
        const is_logged = {
          is_logged: true,
        };
        navigate("/");
        dispatch(loginUserAction(is_logged));
        dispatch(loginUserAction(userData.user));
        setLoginModal(false);
      })
      .catch((error) => {
        console.log("data", error);
      });
  };

  const handleLogin = () => {
    const vkAuthUrl = `https://oauth.vk.com/authorize?client_id=51744107&redirect_uri=https://project001-black.vercel.app&display=page&response_type=token&v=5.131`;

    window.location.href = vkAuthUrl;
  };

  const initVkWidget = () => {
    Config.init({
      appId: 51744107,
      appSettings: {
        agreements: "",
        promo: "",
        vkc_behavior: "",
        vkc_auth_action: "",
        vkc_brand: "",
        vkc_display_mode: "",
      },
    });

    const oneTapButton = Connect.floatingOneTapAuth({
      callback: (event) => {
        const { type } = event;

        if (!type) return;

        switch (type) {
          case ConnectEvents.OneTapAuthEventsSDK.LOGIN_SUCCESS:
            return setVkData(event.payload.user);
          default:
        }

        return;
      },
      options: {
        styles: {
          zIndex: 999,
        },
        skipSuccess: false,
      },
    });

    oneTapButton.authReadyPromise.then((res) => {
      if (res === "VKSDKOneTapAuthNotAuthorized") {
        handleLogin();
      }
    });

    if (oneTapButton) {
      document.body.appendChild(oneTapButton.getFrame());
    }

    return () => {
      if (oneTapButton) {
        oneTapButton.destroy();
      }
    };
  };

  return (
    <>
      <div id="vk-floating-login-container" onClick={initVkWidget}>
        <img src={vk_icon} alt="" />
      </div>
    </>
  );
}

export default VKFloatingLoginComponent;
