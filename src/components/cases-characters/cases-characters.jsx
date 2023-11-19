import React, { useState } from "react";
import "./cases-characters.css";
import { ReactComponent as TitleIcon } from "../../assets/icons/cases-title-icon.svg";
import Card from "../card/card";
import { data } from "../data";
import { useEffect } from "react";
import { mainApi } from "../utils/main-api";

function CasesCharacters() {
  const [cases, setCases] = useState();

  useEffect(() => {
    mainApi
      .getAllCases()
      .then((userData) => {
        setCases(userData);
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  }, []);

  return (
    <div className="cases_block cases_characters">
      <div className="cases_block_title">
        <TitleIcon />
        <h1>Кейсы с персонажами</h1>
      </div>
      <div className="case_block_content">
        {cases ? cases.map((item) => <Card data={item} key={item.id} />) : ""}
      </div>
    </div>
  );
}

export default CasesCharacters;
