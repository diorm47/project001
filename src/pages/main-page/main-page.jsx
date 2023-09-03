import React from "react";

import CasesCharacters from "../../components/cases-characters/cases-characters";
import "./main-page.css";
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
