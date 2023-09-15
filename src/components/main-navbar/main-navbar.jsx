import React from "react";
import "./main-navbar.css";
import mainLogo from "../../assets/main-logo.png";
import { NavLink } from "react-router-dom";

import { ReactComponent as CasesIcon } from "../../assets/icons/main-nav-icons/cases.svg";
import { ReactComponent as UpgradeIcon } from "../../assets/icons/main-nav-icons/upgrade.svg";
import { ReactComponent as StoreIcon } from "../../assets/icons/main-nav-icons/store.svg";
import { ReactComponent as GivingIcon } from "../../assets/icons/main-nav-icons/giving.svg";
import profile_avatar from "../../assets/images/profile-avatar.png";
import { useSelector } from "react-redux";

function MainNavbar({ setLoginModal }) {
  const userData = useSelector((state) => state.user.user);
  return (
    <nav>
      <div className="main_nav_bar">
        <div className="main_logo">
          <NavLink to="/">
            <img src={mainLogo} alt="" />
          </NavLink>
        </div>
        <div className="main_nav_menu">
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
        <div className="nav_profile">
          {userData && userData.is_logged ? (
            <div className="logged_user_profile">
              <div className="nav_topup">
                <p>{userData & userData.balance ? userData.balance : 0} ₽</p>
                <NavLink to="/deposit">
                  <button>ПОПОЛНИТЬ</button>
                </NavLink>
              </div>

              <div className="nav_logged_user" title="Профиль">
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
              className="nav_auth_btns not_logined_btn"
              onClick={() => setLoginModal(true)}
            >
              Войти
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default MainNavbar;
