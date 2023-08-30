import React from "react";
import "./main-navbar.css";
import mainLogo from "../../assets/main-logo.png";
import { NavLink } from "react-router-dom";

import { ReactComponent as CasesIcon } from "../../assets/icons/main-nav-icons/cases.svg";
import { ReactComponent as UpgradeIcon } from "../../assets/icons/main-nav-icons/upgrade.svg";
import { ReactComponent as StoreIcon } from "../../assets/icons/main-nav-icons/store.svg";
import { ReactComponent as GivingIcon } from "../../assets/icons/main-nav-icons/giving.svg";

function MainNavbar({ setLoginModal }) {
  return (
    <nav>
      <div className="main_nav_bar">
        <div className="main_logo">
          <NavLink to="/">
            <img src={mainLogo} alt="" />
          </NavLink>
        </div>
        <div className="main_nav_menu">
          <NavLink to="/">
            <div className="main_nav_menu_item">
              <CasesIcon />
              <p>Кейсы</p>
            </div>
          </NavLink>
          <NavLink to="/">
            <div className="main_nav_menu_item">
              <UpgradeIcon />
              <p>Апгрейд</p>
            </div>
          </NavLink>
          <NavLink to="/">
            <div className="main_nav_menu_item">
              <StoreIcon />
              <p>Магазин</p>
            </div>
          </NavLink>
          <NavLink to="/">
            <div className="main_nav_menu_item">
              <GivingIcon />
              <p>Раздача</p>
            </div>
          </NavLink>
        </div>
        <div className="nav_profile">
          <button className="nav_auth_btns not_logined_btn" onClick={() => setLoginModal(true)}>
            Войти
          </button>
        </div>
      </div>
    </nav>
  );
}

export default MainNavbar;
