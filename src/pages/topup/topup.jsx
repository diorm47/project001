import React, { useState } from "react";
import "./topup.css";
import card1 from "../../assets/images/topup/card-1.png";
import card2 from "../../assets/images/topup/card-2.png";
import card3 from "../../assets/images/topup/card-3.png";
import card4 from "../../assets/images/topup/card-4.png";
import card5 from "../../assets/images/topup/card-5.png";
import card6 from "../../assets/images/topup/card-6.png";
import card7 from "../../assets/images/topup/card-7.png";
import card8 from "../../assets/images/topup/card-8.png";
import card9 from "../../assets/images/topup/card-9.png";
import card10 from "../../assets/images/topup/card-10.png";
import card11 from "../../assets/images/topup/card-11.png";
import card12 from "../../assets/images/topup/card-12.png";
import card13 from "../../assets/images/topup/card-13.png";
import card14 from "../../assets/images/topup/card-14.png";
import card15 from "../../assets/images/topup/card-15.png";

import deposit_bonus from "../../assets/images/deposit-bonus-banner.png";

function Topup() {
  const topup_filter = [
    {
      types: "Все",
    },
    {
      types: "Банковские карты",
    },
    {
      types: "Эл. кошельки",
    },
    {
      types: "Крипта",
    },
    {
      types: "Скины",
    },
  ];
  const topup_items = [
    {
      type: "Эл. кошельки",
      img: card1,
      name: "qiwi",
    },
    {
      type: "Банковские карты",
      img: card2,
      name: "visa/mir",
    },
    {
      type: "Эл. кошельки",
      img: card3,
      name: "apple-pay",
    },
    {
      type: "Банковские карты",
      img: card4,
      name: "visa",
    },
    {
      type: "Эл. кошельки",
      img: card5,
      name: "u-money",
    },
    {
      type: "Банковские карты",
      img: card6,
      name: "visa-turkiye",
    },
    {
      type: "Эл. кошельки",
      img: card7,
      name: "online-bank",
    },
    {
      type: "Эл. кошельки",
      img: card8,
      name: "pix",
    },
    {
      type: "Банковские карты",
      img: card9,
      name: "union-pay",
    },
    {
      type: "Эл. кошельки",
      img: card10,
      name: "qiwi",
    },
    {
      type: "Крипта",
      img: card11,
      name: "tether",
    },
    {
      type: "Крипта",
      img: card12,
      name: "litecoin",
    },
    {
      type: "Крипта",
      img: card13,
      name: "btc",
    },
    {
      type: "Крипта",
      img: card14,
      name: "eth",
    },
    {
      type: "Крипта",
      img: card15,
      name: "btccash",
    },
  ];

  const [selectedMethod, setSelectedMethod] = useState("");
  return (
    <div className="page_template topup_page">
      <div className="page_title">
        <h1>Пополнение баланса</h1>
      </div>
      <div className="topup_filters">
        {topup_filter.map((item) => (
          <div key={item.types} className="topup_filter_item">
            <p>{item.types}</p>
          </div>
        ))}
      </div>
      <div className="topup_content">
        <div className="topup_cards_list_wrapper">
          <div className="topup_cards_list">
            {topup_items.map((item) => (
              <div
                key={item.name}
                onClick={() => setSelectedMethod(item.name)}
                className={`topup_cards_list_item ${
                  selectedMethod === item.name ? "selected_topup_type" : ""
                }`}
              >
                <img src={item.img} alt="" />
              </div>
            ))}
          </div>
          <div className="topup_alert">
            <p>
              Для пополнение баланса вы будете перемещены на сайт платежной
              системы
            </p>
          </div>
        </div>
        <div className="topuping_content">
          <div className="bonus_promocode_topup">
            <div className="topup_bonus">
              <img src={deposit_bonus} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topup;
