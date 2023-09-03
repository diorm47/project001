import React from "react";
import "./items.css";
import fav_case from "../../../../assets/images/fav-case.png";
import best_case from "../../../../assets/images/best-case.png";
import { ReactComponent as Loading } from "../../../../assets/icons/loading.svg";
function Items() {
  return (
    <div className="profile_content_wrapper items_content">
      <div className="profile_bests">
        <div className="profile_best_item">
          <div className="profile_best_item_content">
            <div className="profile_best_item_description">
              <h4>Любимый кейс</h4>
              <p>Кадзуха 100%</p>
            </div>

            <button className="open_case_profile">ОТКРЫТЬ</button>
          </div>
          <div className="profile_best_img">
            <img src={fav_case} alt="" />
          </div>
        </div>
        <div className="profile_best_item">
          <div className="profile_best_item_content">
            <div className="profile_best_item_description">
              <h4>ЛУЧШИЙ ДРОП</h4>
              <p>2 благославений полой луны</p>
            </div>

            <div className="case_price_profile">
              <p>899₽</p>
            </div>
          </div>
          <div className="profile_best_img">
            <img src={best_case} alt="" />
          </div>
        </div>
      </div>
      <div className="profile_items_list">
        <div className="profile_items_list_item">
          <img src={best_case} alt="" />
          <div className="profile_items_list_item_desc">
            <p className="profile_items_name">2 благославений полой луны</p>
            <div className="profile_item_actions_list">
              <div className="profile_item_action green_item">
                <p>Получить на аккаунт</p>
              </div>
              <div className="profile_item_action purple_item">
                <p>Продать за 899 ₽</p>
              </div>
            </div>
          </div>
        </div>
        <div className="profile_items_list_item">
          <img src={best_case} alt="" />
          <div className="profile_items_list_item_desc">
            <p className="profile_items_name">2 благославений полой луны</p>
            <div className="profile_item_actions_list">
              <div className="profile_item_action least_item">
                <Loading />
                <p>На выводе</p>
              </div>
            </div>
          </div>
        </div>
        <div className="profile_items_list_item">
          <img src={best_case} alt="" />
          <div className="profile_items_list_item_desc">
            <p className="profile_items_name">330 кристаллов 💎</p>
            <div className="profile_item_actions_list">
              <div className="profile_item_action green_item">
                <p>Получить на аккаунт</p>
              </div>
              <div className="profile_item_action purple_item">
                <p>Продать за 899 ₽</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Items;
