import React from "react";
import "./shop-page.css";
import CasesCharacters from "../../components/cases-characters/cases-characters";

function ShopPage() {
  return (
    <div className="page_template shop_page">
      <div className="shop_page_title">
        <h1>Магазин примогемов Геншин Импакт</h1>
      </div>
      <div className="shop_page_wrapper">
        <CasesCharacters />
      </div>
      <div className="about_shop_page">
        <p>
          На нашем проекте вы можете приобрести кристаллы, благословения луны и
          прочий игровой донат-ассортимент для Genshin Impact. Количество
          кристаллов, которое вы захотите вывести, отправляется прямиком в игру
          моментально, остаётся только указать свой UID, других данных не
          требуется Цены на сайте существенно ниже, чем в самой игре, у каждого
          есть возможность сэкономить большой процент на покупке кристаллов
          сотворения
        </p>
      </div>
    </div>
  );
}

export default ShopPage;
