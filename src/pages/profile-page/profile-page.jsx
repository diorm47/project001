import React from "react";
import "./profile-page.css";
import user_avatar from "../../assets/images/profile-avatar.png";
import money from "../../assets/icons/user-money.png";
import { ReactComponent as Wallet } from "../../assets/icons/wallet-icon.svg";
import { ReactComponent as EditIcon } from "../../assets/icons/edit-icon.svg";
import { ReactComponent as CopyIcon } from "../../assets/icons/copy-icon.svg";
import { ReactComponent as ItemsIcon } from "../../assets/icons/profile-icons/items-icon.svg";
import { ReactComponent as HistoryIcon } from "../../assets/icons/profile-icons/history-icon.svg";
import { ReactComponent as UpgradeIcon } from "../../assets/icons/profile-icons/upgrade.svg";
import { ReactComponent as PartnersIcon } from "../../assets/icons/profile-icons/partners-icon.svg";
import { ReactComponent as SettingsIcon } from "../../assets/icons/profile-icons/settings-icon.svg";
import { NavLink, Route, Routes } from "react-router-dom";
import Items from "./profile-menu-pages/items/items";
import History from "./profile-menu-pages/history/history";
import Upgrade from "./profile-menu-pages/upgrades/upgrades";
import AffiliateProgram from "./profile-menu-pages/affiliate-program/affiliate-program";
import Settings from "./profile-menu-pages/settings/settings";

function ProfilePage() {
  return (
    <div className="page_template profile_page">
      <div className="profile_menu">
        <div className="user_profile">
          <div className="user_descriptions">
            <div className="user_avatar">
              <img src={user_avatar} alt="user avatar" />
            </div>
            <div className="user_descr">
              <p className="user_name">Alina Fontaine</p>
              <div className="user_moneys">
                <img src={money} alt="" />
                <p>1 200 ₽</p>
              </div>
            </div>
          </div>
          <div className="replenish_wallet">
            <Wallet />
          </div>
        </div>
        <div className="user_id">
          <div className="user_id_input">
            <p>UID</p>
            {/* <input type="text" /> */}
            <span>741936326</span>
          </div>
          <div className="user_id_actions">
            <div>
              <EditIcon />
            </div>
            <div>
              <CopyIcon />
            </div>
          </div>
        </div>
        <div className="bonus_activation">
          <p>Активировать бонус код</p>
        </div>

        <div className="profile_menu_list">
          <NavLink to="items">
            <div className="profile_menu_list_item">
              <ItemsIcon />
              <p>Предметы</p>
            </div>
          </NavLink>
          <NavLink to="history">
            <div className="profile_menu_list_item">
              <HistoryIcon />
              <p>История</p>
            </div>
          </NavLink>
          <NavLink to="upgrades">
            <div className="profile_menu_list_item">
              <UpgradeIcon />
              <p>Апгрейды</p>
            </div>
          </NavLink>
          <NavLink to="affiliate-program">
            <div className="profile_menu_list_item">
              <PartnersIcon />
              <p>Партнерская программа</p>
            </div>
          </NavLink>
          <NavLink to="settings">
            <div className="profile_menu_list_item">
              <SettingsIcon />
              <p>Настройки</p>
            </div>
          </NavLink>
        </div>
      </div>
      <div className="profile_content">
        <Routes>
          <Route path="/" element={<Items />} />
          <Route path="/items" element={<Items />} />
          <Route path="/history" element={<History />} />
          <Route path="/upgrades" element={<Upgrade />} />
          <Route path="/affiliate-program" element={<AffiliateProgram />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default ProfilePage;
