import React, { useEffect } from "react";
import { Config, Connect, ConnectEvents } from "@vkontakte/superappkit";

function VKFloatingLoginComponent({ setVkData }) {
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
            return setVkData(event);
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

    if (oneTapButton) {
      document.body.appendChild(oneTapButton.getFrame());
    }

    return () => {
      if (oneTapButton) {
        // Удаляем iframe при удалении компонента
        oneTapButton.destroy();
      }
    };
  }, []);

  return <div id="vk-floating-login-container"></div>;
}

export default VKFloatingLoginComponent;
