import React from "react";
import "./card.css";
import { useNavigate } from "react-router-dom";

function Card({ data }) {
  const navigate = useNavigate();

  const aboutItem = (item) => {
    navigate(`/case/${item.case_id}`);
  };

  return (
    <div className="card_wrapper" onClick={() => aboutItem(data)}>
      <div className="card_image">
        <img src={`https://legadrop.org/images/case/тестовый запуск.jpg`} alt="" title={`${data.item_name} - ${data.name}`} />
      </div>
      <div className="card_description">
        <div className="card_name">
          <p>{data.name}</p>
        </div>
        <div className="card_prices">
          <p className="item_real_price">{data.real_price}₽</p>
          {data.discount_price ? (
            <p className="item_discount_price">{data.discount_price} ₽</p>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
