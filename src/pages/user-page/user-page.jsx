import React from "react";
import "./user-page.css";
import fav_case from "../../assets/images/fav-case.png";
import best_case from "../../assets/images/best-case.png";
import user_avatar from "../../assets/images/user-img.png";
import crystal from "../../assets/images/case-item.png";
function UserPage() {
  return (
    <div className="page_template user_page">
      <div className="user_page_top">
        <div className="user_page_profile">
          <img src={user_avatar} alt="" />
          <div>
            <p>Виктория Дизайнер</p>
            <button>ПРОФИЛЬ ПОДТВЕРДЖЕН</button>
          </div>
        </div>
        <div className="profile_bests user_page_top_drops">
          <div className="profile_best_item">
            <div className="profile_best_item_content">
              <div className="profile_best_item_description">
                <h4>Любимый кейс</h4>
                <p>Кадзуха 100%</p>
              </div>

              <button className="open_case_profile orange_btn">ОТКРЫТЬ</button>
            </div>
            <div className="profile_best_img">
              <img src={fav_case} alt="" />
            </div>
          </div>
          <div className="profile_best_item">
            <div className="profile_best_item_content">
              <div className="profile_best_item_description">
                <h4>ЛУЧШИЙ ДРОП</h4>
                <p>3 Полой Луны</p>
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
      </div>
      <div className="user_page_middle_btns">
        <button className="grey_btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M19.9005 7.83398L12.4891 12.46C12.1907 12.6466 11.8153 12.6466 11.5073 12.46L4.0959 7.83398C3.56651 7.50204 3.43174 6.72416 3.83605 6.23669C4.1151 5.89441 4.43282 5.61435 4.76965 5.41727L9.98651 2.30558C11.1031 1.63146 12.9126 1.63146 14.0291 2.30558L19.246 5.41727C19.5829 5.61435 19.9005 5.90466 20.1797 6.23669C20.5647 6.72407 20.4299 7.50204 19.9005 7.83398ZM13.2004 15.0919V21.2028C13.2004 21.9362 13.9034 22.4186 14.5243 22.1002C16.4051 21.1256 19.5734 19.302 19.5734 19.302C20.6873 18.6363 21.6004 16.9574 21.6004 15.5777V11.0683C21.6004 10.3061 20.8425 9.82367 20.2217 10.1999L13.6569 14.2235C13.383 14.4068 13.2004 14.7349 13.2004 15.0919ZM10.8004 21.2028V14.9999C10.8004 14.643 10.6177 14.3149 10.3438 14.1316L3.7791 10.1081C3.15814 9.73173 2.40039 10.2141 2.40039 10.9764V15.5777C2.40039 16.9574 3.31341 18.6363 4.42728 19.302C4.42728 19.302 7.59556 21.1256 9.47642 22.1002C10.0973 22.4186 10.8004 21.9362 10.8004 21.2028Z"
              fill="#F7A34D"
            />
          </svg>{" "}
          <p>ПРЕДМЕТ</p>
          <div>
            <span>69</span>
          </div>
        </button>
        <button className="grey_btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M21.6311 15.5579L18.7374 14.0624L20.9867 7.95953C21.0325 7.83536 21.0365 7.7017 20.9983 7.57545C20.9601 7.44921 20.8813 7.33606 20.7719 7.25032C20.6626 7.16459 20.5275 7.11013 20.3839 7.09384C20.2403 7.07755 20.0946 7.10016 19.9652 7.15881L14.8326 9.47984L12.6828 4.42394C12.6297 4.29913 12.536 4.1918 12.4141 4.11612C12.2922 4.04044 12.1478 3.99995 11.9999 4C11.852 3.99996 11.7076 4.04045 11.5857 4.11614C11.4638 4.19182 11.3701 4.29913 11.317 4.42394L9.17799 9.45426L4.54534 7.16891C4.41523 7.10444 4.26648 7.07739 4.11893 7.09137C3.97138 7.10534 3.83205 7.15966 3.71953 7.2471C3.60685 7.33426 3.52608 7.45031 3.48792 7.5799C3.44976 7.70948 3.456 7.8465 3.50582 7.9728L5.74677 13.6476L2.34338 15.5712C2.23832 15.6308 2.15171 15.7136 2.09166 15.8117C2.0316 15.9099 2.00006 16.0202 2 16.1324C2 16.3604 2.13022 16.5727 2.34383 16.6935L6.24631 18.8994C6.36259 18.9652 6.49696 19 6.63409 19H9.20969L9.80478 17.6765L8.42819 16.9296C7.99259 16.6931 8.04428 16.1076 8.51599 15.9369L9.80478 15.4706L9.28381 14.0571C9.12774 13.6335 9.63845 13.2629 10.0619 13.4928L11.2682 14.1471L11.7326 12.6775C11.8794 12.2125 12.6082 12.2125 12.755 12.6775L13.2194 14.1471L14.2721 13.5127C14.7389 13.2312 15.3072 13.7108 15.0286 14.1515L14.195 15.4706L15.7145 15.9285C16.234 16.0851 16.2847 16.7315 15.795 16.953L14.195 17.6765L15.1706 19H16.8779C17.0024 19 17.1248 18.9713 17.2336 18.9166L21.6238 16.7107C21.7372 16.6538 21.8318 16.5705 21.8979 16.4696C21.964 16.3686 21.9992 16.2536 22 16.1363C22.0007 16.0189 21.967 15.9035 21.9021 15.8019C21.8373 15.7003 21.7438 15.6161 21.6311 15.5579Z"
              fill="#525A77"
            />
          </svg>
          <p>АПГРЕЙДЫ</p>
          <div>
            <span>0</span>
          </div>
        </button>
      </div>
      <div className="user_page_crystals">
        <div className="user_page_crystal">
          <div className="user_page_crystal_top">
            <div className="user_page_crystal_top_state">
              <p>продано</p>
            </div>
            <div className="user_page_crystal_top_cost">
              <p>1 500 ₽</p>
            </div>
          </div>
          <img src={crystal} alt="" />
          <div className="user_page_crystal_descr">
            <p> 960 кристаллов 💎</p>
          </div>
        </div>
        <div className="user_page_crystal">
          <div className="user_page_crystal_top">
            <div className="user_page_crystal_top_state">
              <p>продано</p>
            </div>
            <div className="user_page_crystal_top_cost">
              <p>1 500 ₽</p>
            </div>
          </div>
          <img src={crystal} alt="" />
          <div className="user_page_crystal_descr">
            <p> 960 кристаллов 💎</p>
          </div>
        </div>
        <div className="user_page_crystal">
          <div className="user_page_crystal_top">
            <div className="user_page_crystal_top_state">
              <p>продано</p>
            </div>
            <div className="user_page_crystal_top_cost">
              <p>1 500 ₽</p>
            </div>
          </div>
          <img src={crystal} alt="" />
          <div className="user_page_crystal_descr">
            <p> 960 кристаллов 💎</p>
          </div>
        </div>
        <div className="user_page_crystal">
          <div className="user_page_crystal_top">
            <div className="user_page_crystal_top_state">
              <p>продано</p>
            </div>
            <div className="user_page_crystal_top_cost">
              <p>1 500 ₽</p>
            </div>
          </div>
          <img src={crystal} alt="" />
          <div className="user_page_crystal_descr">
            <p> 960 кристаллов 💎</p>
          </div>
        </div>
        <div className="user_page_crystal">
          <div className="user_page_crystal_top">
            <div className="user_page_crystal_top_state">
              <p>продано</p>
            </div>
            <div className="user_page_crystal_top_cost">
              <p>1 500 ₽</p>
            </div>
          </div>
          <img src={crystal} alt="" />
          <div className="user_page_crystal_descr">
            <p> 960 кристаллов 💎</p>
          </div>
        </div>
        <div className="user_page_crystal">
          <div className="user_page_crystal_top">
            <div className="user_page_crystal_top_state">
              <p>продано</p>
            </div>
            <div className="user_page_crystal_top_cost">
              <p>1 500 ₽</p>
            </div>
          </div>
          <img src={crystal} alt="" />
          <div className="user_page_crystal_descr">
            <p> 960 кристаллов 💎</p>
          </div>
        </div>
        <div className="user_page_crystal">
          <div className="user_page_crystal_top">
            <div className="user_page_crystal_top_state">
              <p>продано</p>
            </div>
            <div className="user_page_crystal_top_cost">
              <p>1 500 ₽</p>
            </div>
          </div>
          <img src={crystal} alt="" />
          <div className="user_page_crystal_descr">
            <p> 960 кристаллов 💎</p>
          </div>
        </div>
        <div className="user_page_crystal">
          <div className="user_page_crystal_top">
            <div className="user_page_crystal_top_state">
              <p>продано</p>
            </div>
            <div className="user_page_crystal_top_cost">
              <p>1 500 ₽</p>
            </div>
          </div>
          <img src={crystal} alt="" />
          <div className="user_page_crystal_descr">
            <p> 960 кристаллов 💎</p>
          </div>
        </div>
        <div className="user_page_crystal">
          <div className="user_page_crystal_top">
            <div className="user_page_crystal_top_state">
              <p>продано</p>
            </div>
            <div className="user_page_crystal_top_cost">
              <p>1 500 ₽</p>
            </div>
          </div>
          <img src={crystal} alt="" />
          <div className="user_page_crystal_descr">
            <p> 960 кристаллов 💎</p>
          </div>
        </div>
        <div className="user_page_crystal">
          <div className="user_page_crystal_top">
            <div className="user_page_crystal_top_state">
              <p>продано</p>
            </div>
            <div className="user_page_crystal_top_cost">
              <p>1 500 ₽</p>
            </div>
          </div>
          <img src={crystal} alt="" />
          <div className="user_page_crystal_descr">
            <p> 960 кристаллов 💎</p>
          </div>
        </div>
        <div className="user_page_crystal">
          <div className="user_page_crystal_top">
            <div className="user_page_crystal_top_state">
              <p>продано</p>
            </div>
            <div className="user_page_crystal_top_cost">
              <p>1 500 ₽</p>
            </div>
          </div>
          <img src={crystal} alt="" />
          <div className="user_page_crystal_descr">
            <p> 960 кристаллов 💎</p>
          </div>
        </div>
        <div className="user_page_crystal">
          <div className="user_page_crystal_top">
            <div className="user_page_crystal_top_state">
              <p>продано</p>
            </div>
            <div className="user_page_crystal_top_cost">
              <p>1 500 ₽</p>
            </div>
          </div>
          <img src={crystal} alt="" />
          <div className="user_page_crystal_descr">
            <p> 960 кристаллов 💎</p>
          </div>
        </div>
        <div className="user_page_crystal">
          <div className="user_page_crystal_top">
            <div className="user_page_crystal_top_state">
              <p>продано</p>
            </div>
            <div className="user_page_crystal_top_cost">
              <p>1 500 ₽</p>
            </div>
          </div>
          <img src={crystal} alt="" />
          <div className="user_page_crystal_descr">
            <p> 960 кристаллов 💎</p>
          </div>
        </div>
        <div className="user_page_crystal">
          <div className="user_page_crystal_top">
            <div className="user_page_crystal_top_state">
              <p>продано</p>
            </div>
            <div className="user_page_crystal_top_cost">
              <p>1 500 ₽</p>
            </div>
          </div>
          <img src={crystal} alt="" />
          <div className="user_page_crystal_descr">
            <p> 960 кристаллов 💎</p>
          </div>
        </div>
        <div className="user_page_crystal">
          <div className="user_page_crystal_top">
            <div className="user_page_crystal_top_state">
              <p>продано</p>
            </div>
            <div className="user_page_crystal_top_cost">
              <p>1 500 ₽</p>
            </div>
          </div>
          <img src={crystal} alt="" />
          <div className="user_page_crystal_descr">
            <p> 960 кристаллов 💎</p>
          </div>
        </div>
        <div className="user_page_crystal">
          <div className="user_page_crystal_top">
            <div className="user_page_crystal_top_state">
              <p>продано</p>
            </div>
            <div className="user_page_crystal_top_cost">
              <p>1 500 ₽</p>
            </div>
          </div>
          <img src={crystal} alt="" />
          <div className="user_page_crystal_descr">
            <p> 960 кристаллов 💎</p>
          </div>
        </div>
        <div className="user_page_crystal">
          <div className="user_page_crystal_top">
            <div className="user_page_crystal_top_state">
              <p>продано</p>
            </div>
            <div className="user_page_crystal_top_cost">
              <p>1 500 ₽</p>
            </div>
          </div>
          <img src={crystal} alt="" />
          <div className="user_page_crystal_descr">
            <p> 960 кристаллов 💎</p>
          </div>
        </div>
        <div className="user_page_crystal">
          <div className="user_page_crystal_top">
            <div className="user_page_crystal_top_state">
              <p>продано</p>
            </div>
            <div className="user_page_crystal_top_cost">
              <p>1 500 ₽</p>
            </div>
          </div>
          <img src={crystal} alt="" />
          <div className="user_page_crystal_descr">
            <p> 960 кристаллов 💎</p>
          </div>
        </div>
      </div>
      <div className="show_more_btn user_show_more_btn ">
        <button className="grey_btn">Показать еще</button>
      </div>
    </div>
  );
}

export default UserPage;
