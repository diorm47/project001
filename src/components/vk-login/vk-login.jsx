// import React, { useEffect } from "react";
// import { Config, Connect, ConnectEvents } from "@vkontakte/superappkit";

// function VKFloatingLoginComponent({ setVkData }) {
//   useEffect(() => {
//     Config.init({
//       appId: 51740472, // Замените на ваш ID приложения.

//       appSettings: {
//         agreements: "",
//         promo: "",
//         vkc_behavior: "",
//         vkc_auth_action: "",
//         vkc_brand: "",
//         vkc_display_mode: "",
//       },
//     });

//     const oneTapButton = Connect.floatingOneTapAuth({
//       callback: (event) => {
//         const { type } = event;

//         if (!type) return;

//         switch (type) {
//           case ConnectEvents.OneTapAuthEventsSDK.LOGIN_SUCCESS:
//             return setVkData(event.payload.user);
//           default:
//           // Обработка остальных событий.
//         }

//         return;
//       },
//       options: {
//         styles: {
//           zIndex: 999,
//         },
//         skipSuccess: false,
//       },
//     });

//     if (oneTapButton) {
//       document.body.appendChild(oneTapButton.getFrame());
//     }

//     return () => {
//       if (oneTapButton) {
//         // Удаляем iframe при удалении компонента
//         oneTapButton.destroy();
//       }
//     };
//   }, []);

//   return (
//     <>
//       <div id="vk-floating-login-container"></div>
//     </>
//   );
// }

// export default VKFloatingLoginComponent;

import React, { useEffect } from "react";
import vk_icon from "../../assets/icons/auth-icons/vk-icon.png";
import { mainApi } from "../utils/main-api";

function VKRedirectLoginComponent({ setVkData }) {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const authCode = urlParams.get("code");

    if (authCode) {
      fetchTokenAndUserData(authCode);
    }
  }, []);

  const fetchTokenAndUserData = async (code) => {
    // Обменять код авторизации на токен доступа
    // const tokenResponse = await fetch(
    //   `https://oauth.vk.com/access_token?client_id=51740472&client_secret=7cva9TOtSNDQHXzo0MG3&redirect_uri=${window.location.origin}&code=${code}`
    // );
    // const tokenData = await tokenResponse.json();
    // console.log("tokenData", tokenData);

    mainApi
      .getTokenVK(code)
      .then((userData) => {
        getUserData(userData.access_token);
      })
      .catch(() => {
        return "";
      });
  };

  const getUserData = async (access_token) => {
    const userResponse = await fetch(
      `https://api.vk.com/method/users.get?access_token=${access_token}&v=5.52`
    );
    const userData = await userResponse.json();

    setVkData(userData);
    console.log(userData);
  };
  const handleLogin = () => {
    const vkAuthUrl = `https://oauth.vk.com/authorize?client_id=51740472&redirect_uri=${window.location.origin}&response_type=code&v=5.52`;
    window.location.href = vkAuthUrl;
  };

  return (
    <>
      <img src={vk_icon} onClick={handleLogin} alt="vk_icon" />
    </>
  );
}

export default VKRedirectLoginComponent;
