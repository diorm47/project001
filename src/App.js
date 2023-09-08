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
    if (!localStorage.getItem("open")) {
      var password = prompt("Введите пароль:");

      if (password === "121212") {
        alert("Доступ разрешен!");
        localStorage.setItem("open", 'opened');
      }
    }
  }, [localStorage.getItem("open")]);

  return (
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
  );
}

export default App;
