import React from "react";
import case_item from "../../assets/images/case-item.png";
import "./case-item.css";

function CaseItem({ item }) {
  return (
    <div className="case_item">
      <img src={`https://legadrop.org/${item.image}`} alt="" />
      <p>{item.name} кристаллов 💎</p>
      <span>{(item.cost * 89).toFixed(2)} ₽</span>
    </div>
  );
}

export default CaseItem;
