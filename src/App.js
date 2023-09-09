import React, { Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/footer";
import LiveLength from "./components/live-length/live-length";
import LoginAuth from "./components/login-auth/login-auth";
import MainNavbar from "./components/main-navbar/main-navbar";
import TopNavbar from "./components/top-navbar/top-navbar";
import { mainApi } from "./components/utils/main-api";
import MainPage from "./pages/main-page/main-page";
import ProfilePage from "./pages/profile-page/profile-page";
import Topup from "./pages/topup/topup";
import { loginUserAction } from "./redux/user-reducer";
import CasePage from "./pages/case-page/case-page";

function App() {
  const [loginModal, setLoginModal] = useState(false);
  const [open, setOpen] = useState(sessionStorage.getItem("open"));
  const dispatch = useDispatch();

  const closeModals = () => {
    setLoginModal(false);
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      mainApi
        .reEnter()
        .then((res) => {
          dispatch(loginUserAction(res));
        })
        .catch((error) => {
          console.log("error", error);
        });
    }
  }, [localStorage.getItem("token")]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    if (code) {
      setLoginModal(true);
    }
  }, []);

  useEffect(() => {
    if (!sessionStorage.getItem("open")) {
      var password = prompt("Введите пароль:");

      if (password === "121212") {
        alert("Доступ разрешен!");
        setOpen(true);
        sessionStorage.setItem("open", "opened");
      }
    }
  }, [sessionStorage.getItem("open")]);

  return (
    <>
      {open ? (
        <>
          {loginModal ? (
            <div className="modal_overlay" onClick={() => closeModals()}></div>
          ) : (
            ""
          )}

          <div className="app_content">
            <TopNavbar />
            <LiveLength />
            <MainNavbar setLoginModal={setLoginModal} />

            <Suspense fallback={"loading....."}>
              <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/home" element={<MainPage />} />
                <Route path="/topup" element={<Topup />} />
                <Route path="/profile/*" element={<ProfilePage />} />
                <Route
                  path="/case/:name"
                  element={<CasePage setLoginModal={setLoginModal} />}
                />

                {/* <Route path="*" element={<NotFound />} /> */}
              </Routes>
            </Suspense>

            <Footer />
          </div>
          {loginModal ? <LoginAuth setLoginModal={setLoginModal} /> : ""}
        </>
      ) : (
        ""
      )}
    </>
  );
}

export default App;
// import React, { useEffect } from "react";
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