import { Config, Connect, ConnectEvents } from "@vkontakte/superappkit";
import React, { useEffect } from "react";
import { mainApi } from "../utils/main-api";
function VKFloatingLoginComponent({ setVkData }) {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const authCode = urlParams.get("code");

    if (authCode) {
      fetchTokenAndUserData(authCode);
    }
  }, []);

  const fetchTokenAndUserData = async (code) => {
    mainApi
      .getTokenVK(code)
      .then((userData) => {
        mainApi
          .getVKUser(userData.access_token)
          .then((userData) => {
            setVkData(userData.response[0]);
          })
          .catch((error) => {
            console.log("data", error);
          });
      })
      .catch((error) => {
        console.log("data", error);
      });
  };

  const handleLogin = () => {
    const vkAuthUrl = `https://oauth.vk.com/authorize?client_id=51740472&redirect_uri=${window.location.origin}&response_type=code&v=5.52`;

    window.location.href = vkAuthUrl;
  };
  useEffect(() => {
    Config.init({
      appId: 51744107, // Замените на ваш ID приложения.

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
          // Обработка остальных событий.
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
  }, []);

  return (
    <>
      <div id="vk-floating-login-container"></div>
    </>
  );
}

export default VKFloatingLoginComponent;
