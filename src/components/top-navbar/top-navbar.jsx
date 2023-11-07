import React from "react";
import "./top-navbar.css";
import { NavLink } from "react-router-dom";

import { ReactComponent as TelegramIcon } from "../../assets/icons/telegram-icon.svg";
import { ReactComponent as YoutubeIcon } from "../../assets/icons/youtube-icon.svg";

function TopNavbar() {
  return (
    <div className="top_nav">
      <div className="top_nav_wrapper">
        <div className="top_nav_left_list">
          <NavLink to="/">
            <div className="top_nav_left_item">
              <p>Партнерская программа</p>
            </div>
          </NavLink>
          <NavLink to="/">
            <div className="top_nav_left_item">
              <p>Гарантии</p>
            </div>
          </NavLink>
          <NavLink to="/">
            <div className="top_nav_left_item">
              <p>Поддержка</p>
            </div>
          </NavLink>
          <NavLink to="/">
            <div className="top_nav_left_item">
              <p>FAQ</p>
            </div>
          </NavLink>
          <NavLink to="/live">
            <div className="top_nav_left_item">
              <p>Live выводы</p>
            </div>
          </NavLink>
        </div>
        <div className="top_nav_right_list">
          <a href="#">
            <div className="top_nav_right_social">
              <TelegramIcon />
            </div>
          </a>
          <a href="#">
            <div className="top_nav_right_social">
              <YoutubeIcon />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default TopNavbar;
