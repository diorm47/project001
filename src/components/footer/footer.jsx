import React from "react";
import "./footer.css";
import crystal from "../../assets/icons/crystal-icon.png";
import logo from "../../assets/main-logo.png";
import { NavLink } from "react-router-dom";

import { ReactComponent as YoutubeIcon } from "../../assets/icons/footer-socials/youtube.svg";
import { ReactComponent as VkIcon } from "../../assets/icons/footer-socials/vk.svg";
import { ReactComponent as TikTokIcon } from "../../assets/icons/footer-socials/tik-tok.svg";
import { ReactComponent as TGIcon } from "../../assets/icons/footer-socials/tg.svg";

function Footer() {
  return (
    <footer>
      <div className="footer_top_stats_wrapper">
        <div className="footer_top_stats page_template">
          <div className="footer_stat">
            <p>44 222</p>
            <span>Открыто кейсов</span>
          </div>
          <div className="footer_stat">
            <p>1 458</p>
            <span>Пользователей</span>
          </div>
          <div className="footer_stat">
            <p>234</p>
            <span>Онлайн</span>
          </div>
          <div className="footer_stat">
            <p>884 390</p>
            <span>Покупок в магазине</span>
          </div>
          <div className="footer_stat crystals_stat">
            <div>
              <img src={crystal} alt="" />
              <p>1 144 222</p>
            </div>

            <span>Кристаллов выведено</span>
          </div>
        </div>
      </div>

      <div className="main_footer_wrapper">
        <div className="footer_wrapper page_template">
          <div className="footer_logo">
            <NavLink to="/">
              <img src={logo} alt="" />
            </NavLink>
          </div>
          <div className="footer_menu">
            <div className="footer_menu_item">
              <NavLink to="/">
                <p>Партнерская программа</p>
              </NavLink>
            </div>
            <div className="footer_menu_item">
              <NavLink to="/">
                <p>Гарантии</p>
              </NavLink>
            </div>
            <div className="footer_menu_item">
              <NavLink to="/">
                <p>Поддержка</p>
              </NavLink>
            </div>
            <div className="footer_menu_item">
              <NavLink to="/">
                <p>FAQ</p>
              </NavLink>
            </div>
            <div className="footer_menu_item">
              <NavLink to="/">
                <p>Live выводы</p>
              </NavLink>
            </div>
          </div>
          <div className="footer_socials">
            <a href="#">
              <YoutubeIcon />
            </a>
            <a href="#">
              <VkIcon />
            </a>
            <a href="#">
              <TikTokIcon />
            </a>
            <a href="#">
              <TGIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
