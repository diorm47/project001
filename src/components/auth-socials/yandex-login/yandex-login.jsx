import React from "react";
import { ReactComponent as YandexIcon } from "../../../assets/icons/auth-icons/yandex-login.svg";

const clientID = "5049f78cbe0b451d9a1beaa01cfc04b3";
function extractTokenAndSendMessage() {
  const params = new URLSearchParams(window.location.hash.slice(1));
  if (params.has("access_token") && params.has("token_type")) {
    const access_token = params.get("access_token");
    window.opener.postMessage({ token: access_token }, window.location.origin);
    window.close();
  }
}

extractTokenAndSendMessage();
function openYandexLoginWindow() {
  const redirectUrl = window.location.origin;
  const authUrl = `https://oauth.yandex.ru/authorize?response_type=token&client_id=${clientID}&redirect_uri=${encodeURIComponent(
    redirectUrl
  )}&display=popup`;

  window.open(authUrl, "YandexAuth", "width=600,height=500");
}

function YandexAuthButton({ setYandexData }) {
  const handleYandexLogin = async () => {
    openYandexLoginWindow();
    window.addEventListener("message", async (event) => {
      if (event.origin === window.location.origin && event.data.token) {
        const token = event.data.token;

        const headersList = { Accept: "*/*" };
        const response = await fetch(
          `https://login.yandex.ru/info?format=json&oauth_token=${token}`,
          {
            method: "GET",
            headers: headersList,
          }
        );
        const data = await response.json();

        setYandexData(data);
      }
    });
  };

  return <YandexIcon onClick={handleYandexLogin} />;
}

export default YandexAuthButton;
