import React from "react";
import "./upgrades.css";
import { ReactComponent as Status } from "../../../../assets/icons/history-status.svg";

import { ReactComponent as Defeat } from "../../../../assets/icons/defeat.svg";
import crystal from "../../../../assets/icons/crystal1.png";
function Upgrades() {
  return (
    <div className="profile_content_wrapper upgrade_content">
      <div className="upgrade_items_list">
        <div className="upgrade_list_item">
          <div className="upgrade_list_item_img">
            <img src={crystal} alt="" /> <Defeat className="defeat_icon" />
          </div>
          <div className="upgrade_list_item_des">
            <p className="profile_items_name">67 ₽</p>
            <div>
              <p className="history_item_descr">40 кристаллов 💎</p>

              <p className="history_status status3">
                Сгорел в апгрейде{" "} <Status />
              </p>
            </div>
          </div>
        </div>
        <div className="upgrade_list_item">
          <div className="upgrade_list_item_img">
            <img src={crystal} alt="" /> <Defeat className="defeat_icon" />
          </div>
          <div className="upgrade_list_item_des">
            <p className="profile_items_name">3 024 ₽</p>
            <div>
              <p className="history_item_descr">6 благославений полой луны</p>

              <p className="history_status status1">Получен в апгрейде</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Upgrades;
