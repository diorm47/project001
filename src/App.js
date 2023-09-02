import React, { Suspense, useState } from "react";
import TopNavbar from "./components/top-navbar/top-navbar";
import LiveLength from "./components/live-length/live-length";
import MainNavbar from "./components/main-navbar/main-navbar";
import LoginAuth from "./components/login-auth/login-auth";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/main-page/main-page";
import Footer from "./components/footer/footer";

function App() {
  const [loginModal, setLoginModal] = useState(false);
  const closeModals = () => {
    setLoginModal(false);
  };
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
