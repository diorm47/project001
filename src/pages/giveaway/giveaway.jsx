import React from "react";
import "./giveaway.css";
import { ReactComponent as GiveawayBG } from "../../assets/icons/giveaway.svg";
import avatar from "../../assets/images/live.png";
import img from "../../assets/images/list-giveaway.png";
import crystal from "../../assets/images/crystal-temp.png";

function Giveaway() {
  return (
    <div className="page_template giveaway_page">
      <div className="page_top_link">
        <p>Правила участия</p>
      </div>
      <div className="shop_page_title live_title">
        <h1>РОЗЫГРЫШИ</h1>
      </div>
      <div className="giveaway_content">
        <div className="giveaway_top_items">
          <div className="giveaway_top_item_column first_giveaway">
            <div className="giveaway_top_item">
              <div className="giveaway_top_item_description">
                <div className="giveaway_top_item_description_text">
                  <h2>Каждый час</h2>
                  <div className="dfacjcc">
                    <p className="giveaway_text_temp">420 примогемов</p>
                    <div className="text_line_giveaway"></div>
                    <p className="giveaway_cost"> 510 ₽</p>
                  </div>
                  <div className="giveaway_time">
                    <p className="giveaway_text_temp">Осталось</p>
                    <h3>45 : 12</h3>
                  </div>
                </div>
                <div className="giveaway_top_item_img">
                  <GiveawayBG className="giveawa_item_bg" />
                  <img src={crystal} alt="" />
                </div>
              </div>
              <div className="giveaway_top_item_line"></div>
              <div className="giveaway_top_item_actions">
                <div className="giveaway_top_item_actions_text dfacjcc">
                  <p className="giveaway_text_temp">Бесплатно</p>
                  <div className="giveaway_participants">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                    >
                      <path
                        d="M7.99935 8.66661C9.8403 8.66661 11.3327 7.17422 11.3327 5.33327C11.3327 3.49232 9.8403 1.99994 7.99935 1.99994C6.1584 1.99994 4.66602 3.49232 4.66602 5.33327C4.66602 7.17422 6.1584 8.66661 7.99935 8.66661Z"
                        fill="#7F8BAD"
                      />
                      <path
                        d="M7.99945 10.3333C4.65945 10.3333 1.93945 12.5733 1.93945 15.3333C1.93945 15.52 2.08612 15.6666 2.27279 15.6666H13.7261C13.9128 15.6666 14.0595 15.52 14.0595 15.3333C14.0595 12.5733 11.3395 10.3333 7.99945 10.3333Z"
                        fill="#7F8BAD"
                      />
                    </svg>
                    <p className="giveaway_text_temp">1 783</p>
                  </div>
                </div>
                <button className="giveaway_btn participant_btn">
                  <p>УЧАСТВОВАТЬ</p>
                </button>
              </div>
            </div>
            <button className="giveaway_btn last_winners_btn">
              Последние победители
            </button>
            <div className="giveaway_items_list">
              <div className="giveaway_list_item">
                <div className="giveaway_list_item_descr">
                  <img src={avatar} alt="" />
                  <div>
                    <p className="giveaway_text_temp">6480 примогемов</p>
                    <h4>8 569 ₽</h4>
                    <p className="giveaway_text_temp">13.05.2023 в 05:68</p>
                  </div>
                </div>
                <div className="giveaway_list_item_img">
                  <img src={img} alt="" />
                </div>
              </div>
              <div className="giveaway_list_item">
                <div className="giveaway_list_item_descr">
                  <img src={avatar} alt="" />
                  <div>
                    <p className="giveaway_text_temp">6480 примогемов</p>
                    <h4>8 569 ₽</h4>
                    <p className="giveaway_text_temp">13.05.2023 в 05:68</p>
                  </div>
                </div>
                <div className="giveaway_list_item_img">
                  <img src={img} alt="" />
                </div>
              </div>
              <div className="giveaway_list_item">
                <div className="giveaway_list_item_descr">
                  <img src={avatar} alt="" />
                  <div>
                    <p className="giveaway_text_temp">6480 примогемов</p>
                    <h4>8 569 ₽</h4>
                    <p className="giveaway_text_temp">13.05.2023 в 05:68</p>
                  </div>
                </div>
                <div className="giveaway_list_item_img">
                  <img src={img} alt="" />
                </div>
              </div>
            </div>
            <button className="giveaway_btn show_more_giveaway grey_icon">
              Последние победители
            </button>
          </div>
          <div className="giveaway_top_item_column secondary_giveaway">
            <div className="giveaway_top_item">
              <div className="giveaway_top_item_description">
                <div className="giveaway_top_item_description_text">
                  <h2>Каждый день</h2>
                  <div className="dfacjcc">
                    <p className="giveaway_text_temp">980 примогемов</p>
                    <div className="text_line_giveaway"></div>
                    <p className="giveaway_cost"> 1 280 ₽</p>
                  </div>
                  <div className="giveaway_time">
                    <p className="giveaway_text_temp">Осталось</p>
                    <h3>05 : 45 : 12</h3>
                  </div>
                </div>
                <div className="giveaway_top_item_img">
                  <GiveawayBG className="giveawa_item_bg" />
                  <img src={crystal} alt="" />
                </div>
              </div>
              <div className="giveaway_top_item_line"></div>
              <div className="giveaway_top_item_actions">
                <div className="giveaway_top_item_actions_text dfacjcc">
                  <p className="giveaway_text_temp">
                    При пополнение от{" "}
                    <span className="cost_secondary_temp">250₽</span>
                  </p>
                  <div className="giveaway_participants">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                    >
                      <path
                        d="M7.99935 8.66661C9.8403 8.66661 11.3327 7.17422 11.3327 5.33327C11.3327 3.49232 9.8403 1.99994 7.99935 1.99994C6.1584 1.99994 4.66602 3.49232 4.66602 5.33327C4.66602 7.17422 6.1584 8.66661 7.99935 8.66661Z"
                        fill="#7F8BAD"
                      />
                      <path
                        d="M7.99945 10.3333C4.65945 10.3333 1.93945 12.5733 1.93945 15.3333C1.93945 15.52 2.08612 15.6666 2.27279 15.6666H13.7261C13.9128 15.6666 14.0595 15.52 14.0595 15.3333C14.0595 12.5733 11.3395 10.3333 7.99945 10.3333Z"
                        fill="#7F8BAD"
                      />
                    </svg>
                    <p className="giveaway_text_temp">3 490</p>
                  </div>
                </div>
                <button className="giveaway_btn participant_btn">
                  <p>ВЫ УЖЕ УЧАСТВУЕТЕ</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                  >
                    <path
                      d="M14.9092 3.45L14.8509 6.60833C14.8425 7.04166 15.1175 7.61666 15.4675 7.875L17.5342 9.44166C18.8592 10.4417 18.6425 11.6667 17.0592 12.1667L14.3675 13.0083C13.9175 13.15 13.4425 13.6417 13.3259 14.1L12.6842 16.55C12.1759 18.4833 10.9092 18.675 9.85921 16.975L8.39254 14.6C8.12588 14.1667 7.49254 13.8417 6.99254 13.8667L4.20921 14.0083C2.21754 14.1083 1.65088 12.9583 2.95088 11.4417L4.60088 9.525C4.90921 9.16666 5.05088 8.5 4.90921 8.05L4.05921 5.35C3.56754 3.76666 4.45088 2.89166 6.02588 3.40833L8.48421 4.21666C8.90088 4.35 9.52588 4.25833 9.87588 4L12.4425 2.15C13.8342 1.15833 14.9425 1.74166 14.9092 3.45Z"
                      fill="#191D3E"
                    />
                    <path
                      d="M18.3669 17.0584L15.8419 14.5334C15.6003 14.2917 15.2003 14.2917 14.9586 14.5334C14.7169 14.775 14.7169 15.175 14.9586 15.4167L17.4836 17.9417C17.6086 18.0667 17.7669 18.125 17.9253 18.125C18.0836 18.125 18.2419 18.0667 18.3669 17.9417C18.6086 17.7 18.6086 17.3 18.3669 17.0584Z"
                      fill="#191D3E"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <button className="giveaway_btn last_winners_btn ">
              Последние победители
            </button>
            <div className="giveaway_items_list">
              <div className="giveaway_list_item">
                <div className="giveaway_list_item_descr">
                  <img src={avatar} alt="" />
                  <div>
                    <p className="giveaway_text_temp">6480 примогемов</p>
                    <h4>8 569 ₽</h4>
                    <p className="giveaway_text_temp">13.05.2023 в 05:68</p>
                  </div>
                </div>
                <div className="giveaway_list_item_img">
                  <img src={img} alt="" />
                </div>
              </div>
              <div className="giveaway_list_item">
                <div className="giveaway_list_item_descr">
                  <img src={avatar} alt="" />
                  <div>
                    <p className="giveaway_text_temp">6480 примогемов</p>
                    <h4>8 569 ₽</h4>
                    <p className="giveaway_text_temp">13.05.2023 в 05:68</p>
                  </div>
                </div>
                <div className="giveaway_list_item_img">
                  <img src={img} alt="" />
                </div>
              </div>
              <div className="giveaway_list_item">
                <div className="giveaway_list_item_descr">
                  <img src={avatar} alt="" />
                  <div>
                    <p className="giveaway_text_temp">6480 примогемов</p>
                    <h4>8 569 ₽</h4>
                    <p className="giveaway_text_temp">13.05.2023 в 05:68</p>
                  </div>
                </div>
                <div className="giveaway_list_item_img">
                  <img src={img} alt="" />
                </div>
              </div>
            </div>
            <button className="giveaway_btn show_more_giveaway grey_icon">
              Последние победители
            </button>
          </div>
          <div className="giveaway_top_item_column last_giveaway">
            <div className="giveaway_top_item">
              <div className="giveaway_top_item_description">
                <div className="giveaway_top_item_description_text">
                  <h2>Каждую неделю</h2>
                  <div className="dfacjcc">
                    <p className="giveaway_text_temp">6480 примогемов</p>
                    <div className="text_line_giveaway"></div>
                    <p className="giveaway_cost">8 569 ₽</p>
                  </div>
                  <div className="giveaway_time">
                    <p className="giveaway_text_temp">Осталось</p>
                    <h3>3 дня 05 : 45 : 12</h3>
                  </div>
                </div>
                <div className="giveaway_top_item_img">
                  <GiveawayBG className="giveawa_item_bg" />
                  <img src={crystal} alt="" />
                </div>
              </div>
              <div className="giveaway_top_item_line"></div>
              <div className="giveaway_top_item_actions">
                <div className="giveaway_top_item_actions_text dfacjcc">
                  <p className="giveaway_text_temp">
                    При пополнение от{" "}
                    <span className="giveaway_cost">1000₽</span>
                  </p>
                  <div className="giveaway_participants">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                    >
                      <path
                        d="M7.99935 8.66661C9.8403 8.66661 11.3327 7.17422 11.3327 5.33327C11.3327 3.49232 9.8403 1.99994 7.99935 1.99994C6.1584 1.99994 4.66602 3.49232 4.66602 5.33327C4.66602 7.17422 6.1584 8.66661 7.99935 8.66661Z"
                        fill="#7F8BAD"
                      />
                      <path
                        d="M7.99945 10.3333C4.65945 10.3333 1.93945 12.5733 1.93945 15.3333C1.93945 15.52 2.08612 15.6666 2.27279 15.6666H13.7261C13.9128 15.6666 14.0595 15.52 14.0595 15.3333C14.0595 12.5733 11.3395 10.3333 7.99945 10.3333Z"
                        fill="#7F8BAD"
                      />
                    </svg>
                    <p className="giveaway_text_temp">3 490</p>
                  </div>
                </div>
                <button className="giveaway_btn participant_btn">
                  <p>УЧАСТВОВАТЬ</p>
                </button>
              </div>
            </div>
            <button className="giveaway_btn last_winners_btn ">
              Последние победители
            </button>
            <div className="giveaway_items_list">
              <div className="giveaway_list_item">
                <div className="giveaway_list_item_descr">
                  <img src={avatar} alt="" />
                  <div>
                    <p className="giveaway_text_temp">6480 примогемов</p>
                    <h4>8 569 ₽</h4>
                    <p className="giveaway_text_temp">13.05.2023 в 05:68</p>
                  </div>
                </div>
                <div className="giveaway_list_item_img">
                  <img src={img} alt="" />
                </div>
              </div>
              <div className="giveaway_list_item">
                <div className="giveaway_list_item_descr">
                  <img src={avatar} alt="" />
                  <div>
                    <p className="giveaway_text_temp">6480 примогемов</p>
                    <h4>8 569 ₽</h4>
                    <p className="giveaway_text_temp">13.05.2023 в 05:68</p>
                  </div>
                </div>
                <div className="giveaway_list_item_img">
                  <img src={img} alt="" />
                </div>
              </div>
              <div className="giveaway_list_item">
                <div className="giveaway_list_item_descr">
                  <img src={avatar} alt="" />
                  <div>
                    <p className="giveaway_text_temp">6480 примогемов</p>
                    <h4>8 569 ₽</h4>
                    <p className="giveaway_text_temp">13.05.2023 в 05:68</p>
                  </div>
                </div>
                <div className="giveaway_list_item_img">
                  <img src={img} alt="" />
                </div>
              </div>
            </div>
            <button className="giveaway_btn show_more_giveaway grey_icon">
              Последние победители
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Giveaway;
