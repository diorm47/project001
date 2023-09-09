import React, { useEffect, useState } from "react";
// import vk_icon from "../../assets/icons/auth-icons/vk-icon.png";
// import { mainApi } from "../utils/main-api";

// function VKRedirectLoginComponent({ setVkData }) {
//   useEffect(() => {
//     const urlParams = new URLSearchParams(window.location.search);
//     const authCode = urlParams.get("code");

//     if (authCode) {
//       fetchTokenAndUserData(authCode);
//     }
//   }, []);

//   const fetchTokenAndUserData = async (code) => {
//     mainApi
//       .getTokenVK(code)
//       .then((userData) => {
//         mainApi
//           .getVKUser(userData.access_token)
//           .then((userData) => {
//             console.log("asfvsdfvsfvsdvd", userData);
//             setVkData(userData.response[0]);
//           })
//           .catch((error) => {
//             console.log("data", error);
//           });
//       })
//       .catch((error) => {
//         console.log("data", error);
//       });
//   };

//   const handleLogin = () => {
//     const vkAuthUrl = `https://oauth.vk.com/authorize?client_id=51740472&redirect_uri=${window.location.origin}&response_type=code&v=5.52`;
//     window.location.href = vkAuthUrl;
//   };

//   return <img src={vk_icon} onClick={handleLogin} alt="vk_icon" />;
// }

// export default VKRedirectLoginComponent;

// import React, { useEffect } from "react";
import { Config, Connect, ConnectEvents } from "@vkontakte/superappkit";

function VKFloatingLoginComponent({ setVkData }) {
  const [buttonVisible, setButtonVisible] = useState(false);
  useEffect(() => {
    Config.init({
      appId: 51740472,

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

    if (oneTapButton) {
      document.body.appendChild(oneTapButton.getFrame());
      setButtonVisible(true);
    } else {
      setButtonVisible(false); // Если кнопка не существует, устанавливаем в false
    }
    console.log(buttonVisible);

    return () => {
      if (oneTapButton) {
        oneTapButton.destroy();
      }
    };
  }, []);

  return (
    <>
      <div id="vk-floating-login-container">sdfvsdfv</div>
    </>
  );
}

export default VKFloatingLoginComponent;
