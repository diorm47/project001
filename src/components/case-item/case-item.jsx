import React from "react";
import case_item from "../../assets/images/case-item.png";
import "./case-item.css"

function CaseItem() {
  return (
    <div className="case_item">
      <img src={case_item} alt="" />
      <p>180 кристаллов 💎</p>
      <span>290₽</span>
    </div>
  );
}

export default CaseItem;
