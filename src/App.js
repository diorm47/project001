import React, { Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/footer";
import LiveLength from "./components/live-length/live-length";
import LoginAuth from "./components/login-auth/login-auth";
import MainNavbar from "./components/main-navbar/main-navbar";
import TopNavbar from "./components/top-navbar/top-navbar";
import { mainApi } from "./components/utils/main-api";
import CasePage from "./pages/case-page/case-page";
import MainPage from "./pages/main-page/main-page";
import ProfilePage from "./pages/profile-page/profile-page";
import ShopPage from "./pages/shop-page/shop-page";
import Topup from "./pages/topup/topup";
import { loginUserAction } from "./redux/user-reducer";
import SuccesAuthModal from "./components/sucess-auth-modal/success-auth-modal";
import Live from "./pages/live/live";
import Upgrade from "./pages/upgrade/upgrade";
import Giveaway from "./pages/giveaway/giveaway";
import UserPage from "./pages/user-page/user-page";

function App() {
  const [loginModal, setLoginModal] = useState(false);
  const [successLoginModal, setSuccessLoginModal] = useState(false);
  const usersData = useSelector((state) => state.user.user);

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
    const hash = window.location.hash.substring(1).split("=")[1];
    if (code || hash) {
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

  useEffect(() => {
    if (usersData.password) {
      setSuccessLoginModal(true);
    }
  }, [usersData]);

  return (
    <>
      {open ? (
        <>
          {loginModal || successLoginModal ? (
            <div className="modal_overlay" onClick={() => closeModals()}></div>
          ) : (
            ""
          )}

          <div className="app_content">
            <TopNavbar setLoginModal={setLoginModal} />
            <LiveLength />

            <MainNavbar setLoginModal={setLoginModal} />

            <Suspense fallback={"loading....."}>
              <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/home" element={<MainPage />} />
                <Route path="/deposit" element={<Topup />} />
                <Route path="/profile/*" element={<ProfilePage />} />
                <Route
                  path="/case/:name"
                  element={<CasePage setLoginModal={setLoginModal} />}
                />
                <Route path="/shop" element={<ShopPage />} />
                <Route path="/cases" element={<MainPage />} />
                <Route path="/live" element={<Live />} />
                <Route path="/upgrade" element={<Upgrade />} />
                <Route path="/giveaway" element={<Giveaway />} />
                <Route path="/user" element={<UserPage />} />

                {/* <Route path="*" element={<NotFound />} /> */}
              </Routes>
            </Suspense>

            <Footer />
          </div>
          {loginModal ? <LoginAuth setLoginModal={setLoginModal} /> : ""}
          {successLoginModal ? (
            <SuccesAuthModal setSuccessLoginModal={setSuccessLoginModal} />
          ) : (
            ""
          )}
        </>
      ) : (
        ""
      )}
    </>
  );
}

export default App;
