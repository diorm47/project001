import React from "react";
import "./main-page.css";
import CasesCharacters from "../../components/cases-characters/cases-characters";

function MainPage() {
  return (
    <div className="page_template home_page_wrapper">
      <CasesCharacters />
      <CasesCharacters />
      <CasesCharacters />
    </div>
  );
}

export default MainPage;
