import React from "react";
import "./card.css";
import { useNavigate } from "react-router-dom";

function Card({ data }) {
  const navigate = useNavigate();

  const aboutItem = (item) => {
    navigate(`/case/${item.case_id}`);
  };

  return (
    <div
      className="card_wrapper case_item_card"
      onClick={() => aboutItem(data)}
    >
      <div className="card_image">
        <img
          src={`https://legadrop.org/${data.image}`}
          alt=""
          title={`${data.category.name} - ${data.name}`}
        />
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
