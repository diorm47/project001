import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { ReactComponent as BackIcon } from "../../assets/icons/back-icon.svg";
import CaseItem from "../../components/case-item/case-item";
import { data } from "../../components/data";
import "./case-page.css";
import { ReactComponent as Wallet } from "../../assets/icons/wallet-icon.svg";
import CaseOpening from "../../components/case-opening/case-opening";
import { mainApi } from "../../components/utils/main-api";

function CasePage({ setLoginModal }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const isLogged = useSelector((state) => state.user.user.is_logged);
  const isBalancEnough = useSelector((state) => state.user.user.balance);
  const navigate = useNavigate();
  const params = useParams();
  const [caseElement, setCaseElement] = useState();
  const [caseItems, setCaseItems] = useState();
  const [selectedId, setselectedId] = useState();

  useEffect(() => {
    mainApi
      .getCaseItems(params.name)
      .then((userData) => {
        setCaseElement(userData);
        setCaseItems(userData.items);
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  }, []);

  React.useEffect(() => {
    document.title = `${caseElement ? caseElement.name : ""}  - Legadrop`;
  }, []);
  const [spinningProcess, setSpinningProcess] = useState(false);

  const rendomize = () => {
    mainApi
      .caseRandomizer({
        user: {
          uid: "Se3wfsh5z",
        },
        items: caseItems,
      })
      .then((userData) => {
        setselectedId(userData.item_id);
        setSpinningProcess(true);
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  };

  const spinRoulette = () => {
    rendomize();
  };

  return (
    <div className="page_template case_page">
      <div className="case_title">
        <div className="back_button">
          <button onClick={() => navigate(-1)}>
            <BackIcon />
            Назад
          </button>
        </div>
        <h1>КЕЙС {caseElement?.name}</h1>
      </div>
      {spinningProcess ? (
        <CaseOpening
          setSpinningProcess={setSpinningProcess}
          caseItems={caseItems}
          selectedId={selectedId}
        />
      ) : (
        <div className="about_item_bg">
          <div className="about_item_content">
            <img
              src="https://legadrop.org/images/case/тестовый запуск.jpg"
              alt=""
            />
            <div className="unauthorized_message_wrapper">
              {!isLogged & false ? (
                <>
                  <div className="unauthorized_message">
                    <p>Вы не авторизованы!</p>
                    <span>
                      Для открытия кейсов необходимо пройти авторизацию
                    </span>
                  </div>
                  <button
                    className="nav_auth_btns not_logined_btn"
                    onClick={() => setLoginModal(true)}
                  >
                    Войти
                  </button>
                </>
              ) : (
                ""
              )}
              {/* {isLogged & (isBalancEnough < item.real_price) ? (
                <>
                  <div className="unauthorized_message">
                    <p>
                      <span className="case_page_cost">{item.real_price}₽</span>{" "}
                      - НЕ ХВАТАЕТ 100₽
                    </p>
                    <span>Недостаточно средств для открытия кейса</span>
                  </div>
                  <NavLink to="/deposit">
                    <button className="nav_auth_btns topup_page_btn">
                      ПОПОЛНИТЬ БАЛАНС <Wallet />
                    </button>
                  </NavLink>
                </>
              ) : (
                ""
              )} */}

              {!isLogged ? (
                <div className="open_case_block">
                  <div className="upgade_chances">
                    <div className="upgade_chances_items">
                      <p>X1</p>
                    </div>
                    <div className="upgade_chances_items">
                      <p>X2</p>
                    </div>
                    <div className="upgade_chances_items">
                      <p>X3</p>
                    </div>
                    <div className="upgade_chances_items">
                      <p>X4</p>
                    </div>
                    <div className="upgade_chances_items">
                      <p>X5</p>
                    </div>
                  </div>
                  <button
                    className="nav_auth_btns open_case_btn"
                    onClick={() => spinRoulette()}
                  >
                    ОТКРЫТЬ ЗА 500₽
                  </button>
                  <button className="open_fast_btn">ОТКРЫТЬ БЫСТРО</button>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      )}

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
