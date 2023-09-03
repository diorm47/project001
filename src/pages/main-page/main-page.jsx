import React from "react";
import TelegramLoginButton from "telegram-login-button";
import CasesCharacters from "../../components/cases-characters/cases-characters";
import "./main-page.css";
function MainPage() {
  return (
    <div className="page_template home_page_wrapper">
      <TelegramLoginButton
        botName="GGLegadropbot"
        dataOnauth={(user) => console.log(user)}
      />
      <CasesCharacters />
      <CasesCharacters />
      <CasesCharacters />
    </div>
  );
}

export default MainPage;
