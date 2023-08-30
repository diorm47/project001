import React from "react";
import "./live-length.css";

import { ReactComponent as MenuIcon } from "../../assets/icons/live-menu.svg";
import { ReactComponent as LiveBestIcon } from "../../assets/icons/live-bests.svg";
import { ReactComponent as BestDropIcon } from "../../assets/icons/best-drop.svg";

import LiveDropItem from "../live-drop-item/live-drop-item";

function LiveLength() {
  return (
    <div className="live_length">
      <div className="live_length_wrapper">
        <div className="left_live_buttons">
          <div className="left_live_button live_menu">
            <MenuIcon />
          </div>
          <div className="left_live_button live_best">
            <LiveBestIcon />
          </div>
        </div>
        <div className="live_length_items">
          <div className="best_drop">
            <div className="best_drop_top_line"></div>
            <div className="best_drop_content">
              <div>
                <p>Шикарный дроп!</p>
                <p>
                  6 Благосл. Луны <br /> <span>кейс</span>
                </p>
              </div>
              <BestDropIcon />
            </div>
          </div>
          <LiveDropItem />
        </div>
      </div>
    </div>
  );
}

export default LiveLength;
