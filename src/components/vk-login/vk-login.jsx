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
  const getUserData = async (access_token) => {
    mainApi
      .getVKUser(access_token)
      .then((userData) => {
        console.log("getVKUser", userData);
        setVkData(userData.response[0]);
      })
      .catch((error) => {
        console.log("data", error);
      });
  };

  const fetchTokenAndUserData = async (code) => {
    mainApi
      .getTokenVK(code)
      .then((userData) => {
        console.log(userData);
        console.log(userData.access_token);
        mainApi
          .getVKUser(userData.access_token)
          .then((userData) => {
            setVkData(userData.response[0]);
          })
          .catch((error) => {
            console.log("data", error);
          });
      })
      .catch(() => {
        return "";
      });
  };

  const handleLogin = () => {
    const vkAuthUrl = `https://oauth.vk.com/authorize?client_id=51740472&redirect_uri=${window.location.origin}&response_type=code&v=5.52`;
    window.location.href = vkAuthUrl;
  };

  return <img src={vk_icon} onClick={handleLogin} alt="vk_icon" />;
}

export default VKRedirectLoginComponent;
