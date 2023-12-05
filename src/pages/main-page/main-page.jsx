import React from "react";

import CasesCharacters from "../../components/cases-characters/cases-characters";
import "./main-page.css";
function MainPage() {
  React.useEffect(() => {
    document.title = `LegaDrop - Рулетка для геншина`;
  }, []);
  return (
    <div className="page_template home_page_wrapper">
      <CasesCharacters />
      {/* <CasesCharacters />
      <CasesCharacters /> */}
    </div>
  );
}

export default MainPage;
