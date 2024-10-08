import React from "react";
import { NavLink } from "react-router-dom";
import mainLogo from "../../assets/main-logo.png";
import mainLogoMob from "../../assets/logo-mob.png";
import "./top-navbar.css";

import { useSelector } from "react-redux";
import { ReactComponent as TelegramIcon } from "../../assets/icons/telegram-icon.svg";
import { ReactComponent as YoutubeIcon } from "../../assets/icons/youtube-icon.svg";
import { ReactComponent as MenuMobIcon } from "../../assets/icons/mob-burger.svg";
import { ReactComponent as ExitMenuMobIcon } from "../../assets/icons/exit-menu.svg";
import profile_avatar from "../../assets/images/profile-avatar.png";
import { ReactComponent as CasesIcon } from "../../assets/icons/main-nav-icons/cases.svg";
import { ReactComponent as UpgradeIcon } from "../../assets/icons/main-nav-icons/upgrade.svg";
import { ReactComponent as StoreIcon } from "../../assets/icons/main-nav-icons/store.svg";
import { ReactComponent as GivingIcon } from "../../assets/icons/main-nav-icons/giving.svg";
import { useState } from "react";

function TopNavbar({ setLoginModal }) {
  const userData = useSelector((state) => state.user.user);
  const [visibleMenu, setVisibleMenu] = useState(false);
  return (
    <div className="top_nav">
      <div className="top_nav_wrapper">
        <div className="top_nav_left_list">
          <NavLink to="/referals">
            <div className="top_nav_left_item">
              <p>Партнерская программа</p>
            </div>
          </NavLink>
          <NavLink to="/guarantees">
            <div className="top_nav_left_item">
              <p>Гарантии</p>
            </div>
          </NavLink>
          <NavLink to="/support">
            <div className="top_nav_left_item">
              <p>Поддержка</p>
            </div>
          </NavLink>
          <NavLink to="/faq">
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
        <div className="main_logo">
          <NavLink to="/">
            <img src={mainLogo} className="main_logo_desctop" alt="" />
            <img src={mainLogoMob} className="main_logo_mobile" alt="" />
          </NavLink>
        </div>
        <div className="nav_profile">
          {userData && userData.is_logged ? (
            <div className="logged_user_profile">
              <div className="nav_topup">
                <p>{userData & userData.balance ? userData.balance : 0} ₽</p>
                <NavLink to="/deposit">
                  <button className="main_btn_green">ПОПОЛНИТЬ</button>
                </NavLink>
              </div>

              <div className="nav_logged_user grey_icon" title="Профиль">
                <NavLink to="/profile">
                  <img
                    src={
                      userData && userData.picture
                        ? userData.picture
                        : profile_avatar
                    }
                    alt=""
                  />
                </NavLink>
              </div>
            </div>
          ) : (
            <button
              className="nav_auth_btns not_logined_btn main_btn_green"
              onClick={() => setLoginModal(true)}
            >
              Войти
            </button>
          )}
          {visibleMenu ? (
            <ExitMenuMobIcon
              onClick={() => setVisibleMenu(false)}
              className="mob_menu_icon_exit grey_icon"
            />
          ) : (
            <MenuMobIcon
              onClick={() => setVisibleMenu(true)}
              className="mob_menu_icon grey_icon"
            />
          )}

          <div
            className={
              visibleMenu
                ? "mob_menu_wrapper visible_mob_menu_wrapper"
                : "mob_menu_wrapper"
            }
          >
            <div className="mob_menu_list">
              <NavLink to="/cases">
                <div className="main_nav_menu_item">
                  <CasesIcon />
                  <p>Кейсы</p>
                </div>
              </NavLink>
              <NavLink to="/upgrade">
                <div className="main_nav_menu_item">
                  <UpgradeIcon />
                  <p>Апгрейд</p>
                </div>
              </NavLink>
              <NavLink to="/shop">
                <div className="main_nav_menu_item">
                  <StoreIcon />
                  <p>Магазин</p>
                </div>
              </NavLink>
              <NavLink to="/giveaway">
                <div className="main_nav_menu_item">
                  <GivingIcon />
                  <p>Раздача</p>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopNavbar;
