import React from "react";
import "./history.css";
import best_case from "../../../../assets/images/best-case.png";
import { ReactComponent as Status } from "../../../../assets/icons/history-status.svg";
function History() {
  return (
    <div className="profile_content_wrapper history_content">
      <div className="history_list">
        <div className="history_item">
          <div className="history_item_img">
            <img src={best_case} alt="" />
          </div>
          <div className="history_item_descriptions df_aic_jcsb">
            <div>
              <p className="ticket_number">#56478</p>
              <p className="history_item_descr">
                09.12.23 19:49 - 2 благославений полой луны
              </p>
            </div>
            <div>
              <p className="history_price">1 045 ₽</p>
              <p className="history_status status1">
                Выведено <Status />
              </p>
            </div>
          </div>
        </div>
        <div className="history_item">
          <div className="history_item_img">
            <img src={best_case} alt="" />
          </div>
          <div className="history_item_descriptions df_aic_jcsb">
            <div>
              <p className="ticket_number">#56478</p>
              <p className="history_item_descr">
                09.12.23 19:49 - 2 благославений полой луны
              </p>
            </div>
            <div>
              <p className="history_price">1 045 ₽</p>
              <p className="history_status status2">
              Продано <Status />
              </p>
            </div>
          </div>
        </div>
        <div className="history_item">
          <div className="history_item_img">
            <img src={best_case} alt="" />
          </div>
          <div className="history_item_descriptions df_aic_jcsb">
            <div>
              <p className="ticket_number">#56321</p>
              <p className="history_item_descr">
              01.09.23 06:12 - 300 + 30 кристаллов💎
              </p>
            </div>
            <div>
              <p className="history_price">412 ₽</p>
              <p className="history_status status3">
              Ошибка вывода <Status />
              </p>
            </div>
          </div>
        </div>
        <div className="history_item">
          <div className="history_item_img">
            <img src={best_case} alt="" />
          </div>
          <div className="history_item_descriptions df_aic_jcsb">
            <div>
              <p className="ticket_number">#5600</p>
              <p className="history_item_descr">
              01.09.23 06:12 - 6480 + 1600 кристаллов 💎
              </p>
            </div>
            <div>
              <p className="history_price">8 349 ₽</p>
              <p className="history_status status4">
              Отменен <Status />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default History;
