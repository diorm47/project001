import React, { useEffect } from "react";
import { Config, Connect, ConnectEvents } from "@vkontakte/superappkit";

function VKFloatingLoginComponent({ setVkData }) {
  // useEffect(() => {
  //   Config.init({
  //     appId: 51744107, // Замените на ваш ID приложения.
  //     oauthDomain: "https://legadrop.vercel.app",
  //     connectDomain: "https://legadrop.vercel.app",
  //     loginDomain: "https://legadrop.vercel.app",
  //     appSettings: {
  //       agreements: "",
  //       promo: "",
  //       vkc_behavior: "",
  //       vkc_auth_action: "",
  //       vkc_brand: "",
  //       vkc_display_mode: "",
  //     },
  //   });

  //   const oneTapButton = Connect.floatingOneTapAuth({
  //     callback: (event) => {
  //       const { type } = event;

  //       if (!type) return;

  //       switch (type) {
  //         case ConnectEvents.OneTapAuthEventsSDK.LOGIN_SUCCESS:
  //           return setVkData(event.payload.user);
  //         default:
  //         // Обработка остальных событий.
  //       }

  //       return;
  //     },
  //     options: {
  //       styles: {
  //         zIndex: 999,
  //       },
  //       skipSuccess: false,
  //     },
  //   });

  //   if (oneTapButton) {
  //     document.body.appendChild(oneTapButton.getFrame());
  //   }

  //   return () => {
  //     if (oneTapButton) {
  //       // Удаляем iframe при удалении компонента
  //       oneTapButton.destroy();
  //     }
  //   };
  // }, []);

  useEffect(() => {
    // Проверяем, существует ли глобальный объект VK
    if (window.VK) {
      // Инициализация VK API с вашим API ID
      window.VK.init({ apiId: 51740472 });

      // Удаляем предыдущий виджет, если он существует
      document.getElementById("vk_auth").innerHTML = "";

      // Инициализация виджета авторизации
      window.VK.Widgets.Auth("vk_auth", {
        width: 200, // Ширина виджета
        onAuth: function (data) {
          // Действия после успешной авторизации
          alert(
            "Пользователь " +
              data["first_name"] +
              " " +
              data["last_name"] +
              " (ID: " +
              data["uid"] +
              ") авторизовался"
          );
          // Здесь вы можете добавить дополнительный код для работы с данными пользователя, например, передать их в родительский компонент или в Redux store
        },
        // Если вы хотите использовать перенаправление, то добавьте строку ниже и замените URL на ваш
        authUrl: "https://legadrop.vercel.app",
      });
    }
  }, []);
  return (
    <>
      {/* <div id="vk-floating-login-container"></div> */}
      <div id="vk_auth"></div>
    </>
  );
}

export default VKFloatingLoginComponent;
