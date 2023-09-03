import React from "react";
import "./affiliate-program.css";

import { ReactComponent as EditIcon } from "../../../../assets/icons/edit-icon.svg";
import { ReactComponent as CopyIcon } from "../../../../assets/icons/copy-icon.svg";

import { ReactComponent as Icon1 } from "../../../../assets/icons/ref-icons/icon-1.svg";
import { ReactComponent as Icon2 } from "../../../../assets/icons/ref-icons/icon-2.svg";
import { ReactComponent as Icon3 } from "../../../../assets/icons/ref-icons/icon-3.svg";
import { ReactComponent as Icon4 } from "../../../../assets/icons/ref-icons/icon-4.svg";

function AffiliateProgram() {
  return (
    <div className="profile_content_wrapper referal_content">
      <div className="ref_block_title">
        <h3>Реферальная система</h3>
      </div>
      <div className="ref_link_block">
        <div className="ref_link">
          <p>https://legadrop.net/Gli455</p>
        </div>
        <div className="user_id_actions ref_actions">
          <div>
            <CopyIcon />
          </div>
          <div>
            <EditIcon />
          </div>
        </div>
      </div>
      <div className="ref_description_cards">
        <div className="ref_card">
          <Icon1 />
          <div>
            <p>1 234</p>
            <span>Приглашено</span>
          </div>
        </div>
        <div className="ref_card">
          <Icon2 />
          <div>
            <p>10%</p>
            <span>Процент</span>
          </div>
        </div>
        <div className="ref_card">
          <Icon3 />
          <div>
            <p>12 450₽</p>
            <span>Доход</span>
          </div>
        </div>
        <div className="ref_card ref_get_cash">
          <Icon4 />
          <p>ВЫВЕСТИ</p>
        </div>
      </div>
      <div className="ref_descriptions">
        <p>
          Для приглашения отправьте вашу реферальную ссылку тому, кто ни разу не
          регистрировался на сайте (иначе не сработает)
        </p>
        <p>
          Получать примогемы, крутить крутки бесплатно реально? Партнерская
          программа говорит да! Вам будет начисляться 5% на баланс от каждого
          пополнения приглашенного вами пользователя. Сумма пополнения при этом
          для него не увеличивается, а с промокодом он получает еще больше.
          Таким образом вы будете копить баланс.
        </p>
      </div>
    </div>
  );
}

export default AffiliateProgram;
