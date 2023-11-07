import React from "react";
import "./live.css";
import avatar from "../../assets/images/live.png";
import crystal from "../../assets/icons/crystal2.png";
import { useState } from "react";

function Live() {
  const lives = [
    {
      id: 1,
      name: "Кика Баба",
      item: "7680 примогемов",
      time: "24 минуты назад",
    },
    {
      id: 1234,
      name: "Кика Баба",
      item: "7680 примогемов",
      time: "24 минуты назад",
    },
    {
      id: 123,
      name: "Кика Баба",
      item: "7680 примогемов",
      time: "24 минуты назад",
    },
    {
      id: 134,
      name: "Кика Баба",
      item: "7680 примогемов",
      time: "24 минуты назад",
    },
    {
      id: 1,
      name: "Кика Баба",
      item: "7680 примогемов",
      time: "24 минуты назад",
    },
    {
      id: 1234,
      name: "Кика Баба",
      item: "7680 примогемов",
      time: "24 минуты назад",
    },
    {
      id: 1,
      name: "Кика Баба",
      item: "7680 примогемов",
      time: "24 минуты назад",
    },
    {
      id: 1234,
      name: "Кика Баба",
      item: "7680 примогемов",
      time: "24 минуты назад",
    },
    {
      id: 123,
      name: "Кика Баба",
      item: "7680 примогемов",
      time: "24 минуты назад",
    },
    {
      id: 1,
      name: "Кика Баба",
      item: "7680 примогемов",
      time: "24 минуты назад",
    },
    {
      id: 123,
      name: "Кика Баба",
      item: "7680 примогемов",
      time: "24 минуты назад",
    },
    {
      id: 123,
      name: "Кика Баба",
      item: "7680 примогемов",
      time: "24 минуты назад",
    },
    {
      id: 134,
      name: "Кика Баба",
      item: "7680 примогемов",
      time: "24 минуты назад",
    },
    {
      id: 1,
      name: "Кика Баба",
      item: "7680 примогемов",
      time: "24 минуты назад",
    },
    {
      id: 1234,
      name: "Кика Баба",
      item: "7680 примогемов",
      time: "24 минуты назад",
    },
    {
      id: 1,
      name: "Кика Баба",
      item: "7680 примогемов",
      time: "24 минуты назад",
    },
    {
      id: 1234,
      name: "Кика Баба",
      item: "7680 примогемов",
      time: "24 минуты назад",
    },
    {
      id: 123,
      name: "Кика Баба",
      item: "7680 примогемов",
      time: "24 минуты назад",
    },
    {
      id: 12,
      name: "Кика Баба",
      item: "7680 примогемов",
      time: "24 минуты назад",
    },
    {
      id: 13,
      name: "Кика Баба",
      item: "7680 примогемов",
      time: "24 минуты назад",
    },
    {
      id: 14,
      name: "Кика Баба",
      item: "7680 примогемов",
      time: "24 минуты назад",
    },
    {
      id: 15,
      name: "Кика Баба",
      item: "7680 примогемов",
      time: "24 минуты назад",
    },
    {
      id: 1234,
      name: "Кика Баба",
      item: "7680 примогемов",
      time: "24 минуты назад",
    },
    {
      id: 1,
      name: "Кика Баба",
      item: "7680 примогемов",
      time: "24 минуты назад",
    },
    {
      id: 1234,
      name: "Кика Баба",
      item: "7680 примогемов",
      time: "24 минуты назад",
    },
    {
      id: 123,
      name: "Кика Баба",
      item: "7680 примогемов",
      time: "24 минуты назад",
    },
    {
      id: 12,
      name: "Кика Баба",
      item: "7680 примогемов",
      time: "24 минуты назад",
    },
    {
      id: 13,
      name: "Кика Баба",
      item: "7680 примогемов",
      time: "24 минуты назад",
    },
    {
      id: 14,
      name: "Кика Баба",
      item: "7680 примогемов",
      time: "24 минуты назад",
    },
    {
      id: 15,
      name: "Кика Баба",
      item: "7680 примогемов",
      time: "24 минуты назад",
    },
  ];
  const [visibleItems, setVisibleItems] = useState(10);

  const showMoreItems = () => {
    setVisibleItems((prevCount) => prevCount + 10);
  };
  return (
    <div className="page_template live_page">
      <div className="page_top_link">
        <p>Правила участия</p>
      </div>
      <div className="shop_page_title live_title">
        <h1>live ВЫВОДЫ</h1>
      </div>
      <div className="live_wrapper">
        <div className="live_table_titles">
          <p>Пользователь</p>
          <p>Предмет</p>
          <p>Время</p>
        </div>
        <div className="live_table">
          {lives.slice(0, visibleItems).map((live, index) => (
            <div
              className={
                index % 2 !== 0
                  ? "live_table_item"
                  : "live_table_item colored_live_item"
              }
              key={index}
            >
              <div className="live_user">
                <img src={avatar} alt="" />
                <p>{live.name}</p>
              </div>
              <div className="live_item">
                <img src={crystal} alt="" />
                <p>{live.item}</p>
              </div>
              <div className="live_time">
                <p>{live.time}</p>
              </div>
            </div>
          ))}
          <div className="show_more_btn" onClick={showMoreItems}>
            <button>Показать еще</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Live;
