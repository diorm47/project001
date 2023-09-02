import React from "react";
import "./cases-characters.css";
import { ReactComponent as TitleIcon } from "../../assets/icons/cases-title-icon.svg";
import Card from "../card/card";
import {data} from "../data";

function CasesCharacters() {
  return (
    <div className="cases_block cases_characters">
      <div className="cases_block_title">
        <TitleIcon />
        <h1>Кейсы с персонажами</h1>
      </div>
      <div className="case_block_content">
        {data.map((item) => (
          <Card data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default CasesCharacters;
