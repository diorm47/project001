import React, { useEffect } from "react";
import "./case-page.css";
import { useNavigate, useParams } from "react-router-dom";
import { data } from "../../components/data";
import { ReactComponent as BackIcon } from "../../assets/icons/back-icon.svg";
import CaseItem from "../../components/case-item/case-item";

function CasePage({ setLoginModal }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const params = useParams();
  const item = data.find((i) => i.item_name === params.name);
  React.useEffect(() => {
    document.title = `${item.item_name} - ${item.name} - Legadrop`;
  }, []);
  return (
    <div className="page_template case_page">
      <div className="case_title">
        <div className="back_button">
          <button onClick={() => navigate(-1)}>
            <BackIcon />
            Назад
          </button>
        </div>
        <h1>КЕЙС {item.item_name}</h1>
      </div>
      <div className="about_item_bg">
        <div className="about_item_content">
          <img src={item.image} alt="" />
          <div className="unauthorized_message_wrapper">
            <div className="unauthorized_message">
              <p>Вы не авторизованы!</p>
              <span>Для открытия кейсов необходимо пройти авторизацию</span>
            </div>
            <button
              className="nav_auth_btns not_logined_btn"
              onClick={() => setLoginModal(true)}
            >
              Войти
            </button>
          </div>
        </div>
      </div>
      <div className="case_items_block">
        <h3>СОДЕРЖИМОЕ КЕЙСА</h3>
        <div className="case_items_content">
          <CaseItem />
          <CaseItem />
          <CaseItem />
          <CaseItem />
          <CaseItem />
          <CaseItem />
          <CaseItem />
          <CaseItem />
          <CaseItem />
          <CaseItem />
          <CaseItem />
          <CaseItem />
          <CaseItem />
          <CaseItem />
          <CaseItem />
          <CaseItem />
          <CaseItem />
          <CaseItem />
        </div>
      </div>
    </div>
  );
}

export default CasePage;
