import React, { useState, useEffect, useRef } from "react";
import "./case-opening.css";
import { ReactComponent as Marker } from "../../assets/icons/case_opening-marker.svg";
import { ReactComponent as GifLoader } from "../../assets/icons/opening-loader.svg";
import { ReactComponent as GradientLeft } from "../../assets/icons/case-opening-left-gr.svg";
import { ReactComponent as GradientRight } from "../../assets/icons/case-opening-right-gr.svg";
import case_item_img from "../../assets/images/case-item.png";
import sound from "../../assets/sound.mp3";
import winnedAudio from "../../assets/winned.mp3";

import useSound from "use-sound";
import "react-roulette-pro/dist/index.css";
import { generateRandomNumber } from "../utils/utils";
import spin_bg from "../../assets/images/updating-bg.png";

function CaseOpening() {
  const case_items = [
    {
      id: 1111,
      description: "789 кристаллов 💎",
      cost: "23",
      image: case_item_img,
      rarity: 11,
    },
    {
      id: 2222,
      description: "679 кристаллов 💎",
      cost: "566",
      image: case_item_img,
      rarity: 12,
    },
    {
      id: 3333,
      description: "568 кристаллов 💎",
      cost: "567",
      image: case_item_img,
      rarity: 13,
    },
    {
      id: 4444,
      description: "89 кристаллов 💎",
      cost: "5678",
      image: case_item_img,
      rarity: 1,
    },
    {
      id: 5555,
      description: "23 кристаллов 💎",
      cost: "5688",
      image: case_item_img,
      rarity: 13,
    },
    {
      id: 6666,
      description: "12 кристаллов 💎",
      cost: "5688",
      image: case_item_img,
      rarity: 18,
    },
    {
      id: 7777,
      description: "665 кристаллов 💎",
      cost: "5688",
      image: case_item_img,
      rarity: 12,
    },
    {
      id: 8888,
      description: "10 кристаллов 💎",
      cost: "5644",
      image: case_item_img,
      rarity: 13,
    },
    {
      id: 9999,
      description: "340 кристаллов 💎",
      cost: "5678",
      image: case_item_img,
      rarity: 15,
    },
  ];
  const extendedItems = [
    ...case_items,
    ...case_items,
    ...case_items,
    ...case_items,
  ];
  const wheelRef = useRef(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [winnedPrize, setWinnedPrize] = useState({
    id: 1111,
    description: "789 кристаллов 💎",
    cost: "23",
    image: case_item_img,
    rarity: 11,
  });
  const [winnedPrizeBlock, setWinnedPrizeBlock] = useState(false);

  const [play, { stop }] = useSound(sound, { volume: 0.5 });
  const [playWinnedSound, { stop: stopWinnedSound }] = useSound(winnedAudio, {
    volume: 0.5,
  });

  const resetWheel = () => {
    if (wheelRef.current) {
      wheelRef.current.style.transition = "none";
      wheelRef.current.style.transform = "translateX(0)";
    }
    setIsSpinning(false);
  };

  const spinWheel = (selectedId) => {
    setWinnedPrizeBlock(false);
    setIsSpinning(true);
    const selectedIndex = case_items.findIndex(
      (item) => item.id === selectedId
    );
    if (selectedIndex === -1) {
      return;
    }

    setWinnedPrize(case_items.filter((item) => item.id === selectedId));
    const cardWidth = 183;
    const viewportCenter = window.innerWidth / 2;
    const initialSpin = cardWidth * case_items.length * 2;
    const targetPosition = cardWidth * selectedIndex;
    const centeringOffset = cardWidth / 2;
    const spinDistance =
      initialSpin + targetPosition + centeringOffset - viewportCenter;
    wheelRef.current.style = "filter: blur(0);";
    wheelRef.current.style.transition =
      "transform 10s cubic-bezier(0.25, 1, 0.40, 1)";
    wheelRef.current.style.transform = `translateX(-${
      spinDistance + cardWidth + generateRandomNumber()
    }px)`;

    let previousCardEdge = null;
    let interval = setInterval(() => {
      const currentTransform = wheelRef.current.style.transform;
      const currentX = parseFloat(
        currentTransform.split("(")[1].split("px")[0]
      );
      const currentCardEdge = Math.abs(currentX % cardWidth);

      previousCardEdge = currentCardEdge;
    }, 100);

    setTimeout(() => {
      setIsSpinning(false);
      clearInterval(interval);

      const finalAdjustment = spinDistance + cardWidth / 2;
      wheelRef.current.style.transition = "transform 0.5s ease-out";
      wheelRef.current.style.transform = `translateX(-${
        finalAdjustment + cardWidth
      }px)`;

      setTimeout(() => {
        setWinnedBlock();
      }, 700);
      setTimeout(() => {
        resetWheel();
      }, 3000);
    }, 10000);
  };

  const setWinnedBlock = () => {
    wheelRef.current.style = "filter: blur(5px);";
    setWinnedPrizeBlock(true);
    playWinnedSound();
  };

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
          <button onClick={() => spinWheel(1111)}>
            <p>ОТКРЫВАЕТСЯ</p> <GifLoader />
          </button>
        </div>
      </div>

      {winnedPrizeBlock ? (
        <div className="spin_result">
          <div className="spin_result_wrapper">
            {winnedPrize ? (
              <div className="spin_result_item">
                <div className="spin_result_item_image">
                  <img src={spin_bg} className="spin_result_item_bg" alt="" />
                  <img
                    src={case_item_img}
                    className="spin_result_item-image"
                    alt=""
                  />
                </div>
                <div className="spin_result_item_descriptions">
                  <div className="spin_result_item_description">
                    <p>{winnedPrize[0].description}</p>
                  </div>
                  <div className="spin_result_item_cost">
                    <p>{winnedPrize[0].cost} ₽</p>
                  </div>
                  <div className="spin_result_item_id">
                    <h2>ID: {winnedPrize[0].id}</h2>
                  </div>
                  <div className="retry_btn">
                    <button onClick={() => spinWheel(1111)}>Ещё раз</button>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default CaseOpening;
