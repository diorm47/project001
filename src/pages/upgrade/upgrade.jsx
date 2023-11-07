import React from "react";
import "./upgrade.css";
import updating_item from "../../assets/images/update-item.png";
import updating_bottom from "../../assets/images/update-bottom.png";
import updating_chance from "../../assets/images/updating-bg.png";
import updating_item_to from "../../assets/images/to-update.png";
import CaseItem from "../../components/case-item/case-item";

function Upgrade() {
  return (
    <div className="page_template upgrade_page">
      <div className="upgrade_block">
        <div className="upgrade_wrapper">
          <div className="updating_item">
            <img className="updating_item_img" src={updating_item} alt="" />
            <img className="updating_bottom_img" src={updating_bottom} alt="" />
            <p>Выбери предмет, который мы будем апгрейдить</p>
          </div>
          <div className="updating_chance">
            <img src={updating_chance} alt="" />
            <div className="updating_percent">
              <p>55.00%</p>
              <span>шанс возвышения</span>
            </div>
          </div>
          <div className="updating_item updating_item_to">
            <img className="updating_item_img" src={updating_item_to} alt="" />
            <img className="updating_bottom_img" src={updating_bottom} alt="" />
            <p>
              Выбери предмет, который будем <br /> пытаться получить
            </p>
          </div>
        </div>
        <div className="update_btn">
          <button className="main_btn_temp">ВОЗВЫСИТЬ</button>
        </div>
      </div>
      <div className="upgrade_secondary_block">
        <div className="upgrade_secondary_block_item">
          <div className="upgrade_secondary_block_item_title">
            <p>Ваш инвентарь</p>
          </div>
          <div className="upgrade_secondary_items_wrapper">
            <CaseItem />
            <CaseItem />
            <CaseItem />
            <CaseItem />
            <CaseItem />
          </div>
        </div>
        <div className="upgrade_secondary_block_item">
          <div className="upgrade_secondary_block_item_title">
            <p>Получить</p>
            <div className="upgrade_block_sort">
              <p>Цена</p>
              <svg
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 0L0 8H12L6 0Z" fill="#E0E6FF" />
              </svg>
            </div>
          </div>
          <div className="upgrade_secondary_items_wrapper">
            <CaseItem />
            <CaseItem />
            <CaseItem />
            <CaseItem />
            <CaseItem />
            <CaseItem />
            <CaseItem />
            <CaseItem />
            <CaseItem />
            <CaseItem />
            <CaseItem />
            <CaseItem />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Upgrade;
