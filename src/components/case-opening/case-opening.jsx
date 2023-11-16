import React, { useState, useEffect, useRef } from "react";
import "./case-opening.css";
import { ReactComponent as Marker } from "../../assets/icons/case_opening-marker.svg";
import { ReactComponent as GifLoader } from "../../assets/icons/opening-loader.svg";
import { ReactComponent as GradientLeft } from "../../assets/icons/case-opening-left-gr.svg";
import { ReactComponent as GradientRight } from "../../assets/icons/case-opening-right-gr.svg";
import case_item_img from "../../assets/images/case-item.png";
import sound from "../../assets/sound.mp3";
import RoulettePro from "react-roulette-pro";
import "react-roulette-pro/dist/index.css";

function CaseOpening() {
  const case_items = [
    {
      id: 567890,
      description: "789 кристаллов 💎",
      cost: "23",
      image: case_item_img,
      rarity: 11,
    },
    {
      id: 567781,
      description: "679 кристаллов 💎",
      cost: "566",
      image: case_item_img,
      rarity: 12,
    },
    {
      id: 87999981,
      description: "568 кристаллов 💎",
      cost: "567",
      image: case_item_img,
      rarity: 13,
    },
    {
      id: 5634,
      description: "89 кристаллов 💎",
      cost: "5678",
      image: case_item_img,
      rarity: 1,
    },
    {
      id: 567678,
      description: "23 кристаллов 💎",
      cost: "5688",
      image: case_item_img,
      rarity: 13,
    },
    {
      id: 56789,
      description: "12 кристаллов 💎",
      cost: "5688",
      image: case_item_img,
      rarity: 18,
    },
    {
      id: 56799,
      description: "665 кристаллов 💎",
      cost: "5688",
      image: case_item_img,
      rarity: 12,
    },
    {
      id: 678892,
      description: "10 кристаллов 💎",
      cost: "5644",
      image: case_item_img,
      rarity: 13,
    },
    {
      id: 34345,
      description: "340 кристаллов 💎",
      cost: "5678",
      image: case_item_img,
      rarity: 15,
    },
  ];
  const wheelRef = useRef(null);
  const [isSpinning, setIsSpinning] = useState(false);

  const spinWheel = (selectedId) => {
    setIsSpinning(true);
    const selectedIndex = case_items.findIndex((item) => item.id === selectedId);
    if (selectedIndex === -1) {
      console.error("Selected item not found");
      return;
    }
  
    // Вычисляем расстояние для вращения
    const cardWidth = 183;
    const offset = (window.innerWidth - cardWidth) / 2;
    const initialSpin = cardWidth * case_items.length * 2; // начальное вращение для эффекта
    const targetPosition = cardWidth * selectedIndex;
    const spinDistance = initialSpin + targetPosition - offset;
  
    // Применяем стиль для анимации
    wheelRef.current.style.transition = "transform 10s cubic-bezier(0.33, 1, 0.68, 1)";
    wheelRef.current.style.transform = `translateX(-${spinDistance}px)`;
  
    setTimeout(() => {
      setIsSpinning(false);
    }, 10000);
  };
  
  const extendedItems = [...case_items, ...case_items, ...case_items];

  return (
    <>
      <div className="case_opening_process">
        <div className="case_opening_items_list">
          <div className="case_opening_items_wrapper">
            <div className="case_opening_items" ref={wheelRef}>
              {extendedItems.map((item, index) => (
                <div
                  key={index}
                  className={
                    item.id % 2 == 0
                      ? "case_opening_item case_opening_item_bg_firstly"
                      : "case_opening_item case_opening_item_bg_secondary"
                  }
                >
                  <div className="case_opening_item_img">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="case_opening_item_description">
                    <p>{item.description}</p>
                  </div>
                  <div className="case_opening_item_cost">
                    <p>{item.cost} ₽</p>
                  </div>
                  <h1>{item.id}</h1>
                </div>
              ))}
            </div>
            <GradientLeft className="case_opening_left_gr" />
            <GradientRight className="case_opening_right_gr" />
          </div>
          <div className="case_opening_marker">
            <Marker />
          </div>
        </div>
        <div className="case_opening_process_btn">
          <button onClick={() => spinWheel(5634)}>
            <p>ОТКРЫВАЕТСЯ</p> <GifLoader />
          </button>
        </div>
      </div>
    </>
  );
}

export default CaseOpening;
