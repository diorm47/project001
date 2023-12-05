import React, { useEffect, useRef, useState } from "react";
import "react-roulette-pro/dist/index.css";
import useSound from "use-sound";
import { ReactComponent as GradientLeft } from "../../assets/icons/case-opening-left-gr.svg";
import { ReactComponent as GradientRight } from "../../assets/icons/case-opening-right-gr.svg";
import { ReactComponent as Marker } from "../../assets/icons/case_opening-marker.svg";
import loading from "../../assets/loading-gif-png-5.gif";
import sound from "../../assets/sound.mp3";
import winnedAudio from "../../assets/winned.mp3";
import "./case-opening.css";

function CaseOpening({
  setSpinningProcess,
  caseItems,
  selectedId,
  extendedItems,
}) {
  const wheelRef = useRef(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [winnedPrize, setWinnedPrize] = useState({});
  const [winnedPrizeBlock, setWinnedPrizeBlock] = useState(false);

  const [play, { stop }] = useSound(sound, { volume: 0.5 });
  const [playWinnedSound, { stop: stopWinnedSound }] = useSound(winnedAudio, {
    volume: 1,
  });
  const [cardWidth, setCardWidth] = useState(183);

  useEffect(() => {
    const updateCardWidth = () => {
      const item = document.querySelector(".case_opening_item");
      if (item) {
        setCardWidth(item.offsetWidth);
      }
    };

    updateCardWidth();

    const handleResize = () => {
      updateCardWidth();
      if (isSpinning) {
        restartRoulette();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isSpinning]);
  const resetWheel = () => {
    if (wheelRef.current) {
      wheelRef.current.style.transition = "none";
      wheelRef.current.style.transform = "translateX(0)";

      // eslint-disable-next-line no-unused-expressions
      wheelRef.current.offsetHeight;

      wheelRef.current.addEventListener(
        "transitionend",
        () => {
          setIsSpinning(false);
        },
        { once: true }
      );
    }
  };

  const spinWheel = () => {
    const extendedIndex = extendedItems.findIndex(
      (item) => item.item_id === selectedId
    );

    if (extendedIndex === -1) {
      return;
    }

    setWinnedPrizeBlock(false);
    setIsSpinning(true);
    setWinnedPrize(
      extendedItems.filter((item) => item.item_id === selectedId)[0]
    );
    const wrapper = wheelRef.current;
    if (!wrapper) {
      return;
    }
    const viewportCenter = wrapper.offsetWidth / 2;
    const initialSpin = cardWidth * caseItems.length * 2;
    const targetPosition = cardWidth * extendedIndex;
    const centeringOffset = cardWidth / 2;
    const spinDistance =
      initialSpin + targetPosition - viewportCenter + centeringOffset;
    wheelRef.current.style.transition =
      "transform 10s cubic-bezier(0.15, 1, 0.40, 1)";
    wheelRef.current.style.transform = `translateX(-${spinDistance}px)`;
    setTimeout(() => {
      setIsSpinning(false);
      const selectedItem =
        wheelRef.current.children[extendedIndex + caseItems.length * 2];
      const selectedItemCenterPosition =
        selectedItem.offsetLeft + cardWidth / 2;
      const correction = viewportCenter - selectedItemCenterPosition;
      wheelRef.current.style.transition = "transform 0.5s ease-out";
      wheelRef.current.style.transform = `translateX(${correction}px)`;
      setWinnedPrizeBlock(true);
      playWinnedSound();
    }, 9000);
  };

  const restartRoulette = () => {
    resetWheel();
    spinWheel();
    stopWinnedSound();
  };

  useEffect(() => {
    restartRoulette();
  }, []);

  return (
    <>
      <div className="case_opening_process">
        <div className="case_opening_items_list">
          <div className="case_opening_items_wrapper">
            <div className="case_opening_items" ref={wheelRef}>
              {extendedItems
                ? extendedItems.map((item, index) => (
                    <div
                      key={index}
                      className={
                        item.id % 2 == 0
                          ? "case_opening_item case_opening_item_bg_firstly"
                          : "case_opening_item case_opening_item_bg_secondary"
                      }
                    >
                      <div className="case_opening_item_img">
                        <img
                          src={`https://legadrop.org/${item.image}`}
                          alt=""
                        />
                      </div>
                      <div className="case_opening_item_description">
                        <p>{item.name} кристаллов 💎</p>
                      </div>
                      <div className="case_opening_item_cost">
                        <p>{(item.cost * 89.35).toFixed(2)} ₽</p>
                      </div>
                      <h2>{item.item_id}</h2>
                    </div>
                  ))
                : ""}
            </div>
            <GradientLeft className="case_opening_left_gr" />
            <GradientRight className="case_opening_right_gr" />
          </div>
          <div className="case_opening_marker">
            <Marker />
          </div>
        </div>
        <div className="case_state">
          {winnedPrizeBlock ? (
            <div className="winned_block_actions">
              <div className="winned_block_actions_btns">
                <div className="restart_roulette_btn">
                  <button onClick={() => setSpinningProcess(false)}>
                    ПОПРОБОВАТЬ ЕЩЕ{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M1.44453 10.148H1.44489L2.63015 10.1472C2.74802 10.1471 2.86103 10.1003 2.94431 10.0172C3.0276 9.93414 3.07434 9.8215 3.07426 9.70407C3.0732 8.23404 3.54813 6.83822 4.44768 5.66762C5.71822 4.01416 7.65085 3.06584 9.74988 3.06584C11.2248 3.06584 12.6232 3.5379 13.7943 4.43096C14.1772 4.72232 14.5274 5.05394 14.8388 5.42008L12.6501 5.03515C12.5927 5.02504 12.5337 5.02631 12.4768 5.03888C12.4198 5.05145 12.3658 5.07509 12.318 5.10843C12.2702 5.14177 12.2294 5.18417 12.198 5.23321C12.1667 5.28224 12.1453 5.33696 12.1352 5.39422L11.9291 6.55696C11.9086 6.6726 11.9351 6.79161 12.0027 6.88781C12.0703 6.98401 12.1735 7.04953 12.2895 7.06994L17.542 7.9937C17.658 8.0141 17.7775 7.98774 17.8741 7.92043C17.9219 7.88709 17.9627 7.84469 17.9941 7.79565C18.0254 7.74661 18.0468 7.6919 18.0569 7.63463L18.9842 2.40214C19.0047 2.2865 18.9782 2.16749 18.9107 2.07129C18.8431 1.97509 18.7399 1.90958 18.6238 1.88916L17.4566 1.68389C17.3991 1.67373 17.3402 1.67496 17.2832 1.68752C17.2262 1.70007 17.1722 1.7237 17.1244 1.75705C17.0766 1.7904 17.0358 1.83282 17.0045 1.88188C16.9731 1.93094 16.9518 1.98567 16.9417 2.04296L16.5514 4.24505C16.1126 3.7025 15.6103 3.2141 15.0552 2.79025C13.5194 1.61907 11.6853 1 9.7513 1C7.0002 1 4.46677 2.24351 2.80065 4.4116C1.62131 5.94628 0.998698 7.77691 1 9.70561C1.00013 9.82298 1.04702 9.9355 1.13037 10.0185C1.21372 10.1014 1.32671 10.148 1.44453 10.148ZM18.8696 9.98143C18.7863 9.89853 18.6733 9.85197 18.5555 9.85196H18.5552L17.3699 9.85285C17.252 9.85294 17.139 9.89968 17.0557 9.98277C16.9725 10.0659 16.9257 10.1785 16.9258 10.2959C16.9269 11.766 16.4519 13.1618 15.5524 14.3324C14.2818 15.9858 12.3492 16.9342 10.2501 16.9342C8.7753 16.9342 7.37681 16.4621 6.20572 15.569C5.82288 15.2777 5.47269 14.9461 5.16121 14.5799L7.34991 14.9648C7.46599 14.9853 7.58545 14.9589 7.68202 14.8915C7.77859 14.8242 7.84435 14.7214 7.86484 14.6058L8.07084 13.443C8.09132 13.3274 8.06486 13.2084 7.99726 13.1122C7.92967 13.016 7.82648 12.9505 7.7104 12.9301L2.45799 12.0063C2.34191 11.9859 2.22245 12.0123 2.12588 12.0796C2.02931 12.1469 1.96355 12.2497 1.94305 12.3654L1.01583 17.5979C0.995343 17.7135 1.02181 17.8325 1.0894 17.9287C1.157 18.0249 1.26018 18.0904 1.37626 18.1108L2.54345 18.3161C2.65953 18.3365 2.77897 18.3101 2.87554 18.2428C2.97211 18.1754 3.03789 18.0727 3.05844 17.957L3.44869 15.7549C3.88751 16.2975 4.38983 16.7859 4.94496 17.2097C6.48064 18.3809 8.31465 19 10.2488 19C12.9999 19 15.5333 17.7565 17.1994 15.5884C18.3787 14.0537 19.0013 12.2231 19 10.2944C18.9999 10.177 18.953 10.0644 18.8696 9.98143Z"
                        fill="#191D3E"
                      />
                    </svg>
                  </button>
                </div>
                <div className="sell_prize_btn">
                  <button>
                    Продать за{" "}
                    {winnedPrize
                      ? `${(winnedPrize.cost * 89.35).toFixed(2)} ₽`
                      : ""}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="22"
                      viewBox="0 0 23 22"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14.4696 2.09524V6.28573H12.9065V2.09524C12.9065 1.79747 12.6563 1.65413 12.4896 1.65413C12.4359 1.65445 12.3828 1.66569 12.3333 1.68721L4.06941 4.98446C3.51707 5.20498 3.16274 5.75635 3.16274 6.3849V7.12379C2.21448 7.87368 1.59961 9.07569 1.59961 10.432V6.3849C1.59961 5.07263 2.36034 3.90371 3.51707 3.44059L11.7914 0.132344C12.0207 0.0440858 12.2603 0 12.4896 0C13.5317 0 14.4696 0.89332 14.4696 2.09524ZM21.3992 13.7294V14.8321C21.3992 15.1298 21.1804 15.3724 20.8886 15.3835H19.3671C18.8148 15.3835 18.3146 14.9534 18.2729 14.38C18.2417 14.0381 18.3667 13.7183 18.5751 13.4978C18.7627 13.2883 19.0232 13.178 19.3046 13.178H20.8782C21.1804 13.189 21.3992 13.4316 21.3992 13.7294ZM20.3575 12.0201H19.2945C18.711 12.0201 18.1795 12.2627 17.7939 12.6817C17.2729 13.2221 17.0123 14.0271 17.2312 14.8652C17.4917 15.8908 18.4505 16.5413 19.4509 16.5413H20.3575C20.9307 16.5413 21.3996 17.0376 21.3996 17.6442V17.8537C21.3996 20.1364 19.6385 22 17.4813 22H5.51795C3.36074 22 1.59961 20.1364 1.59961 17.8537V10.432C1.59961 9.07569 2.21448 7.87368 3.16274 7.12379C3.81927 6.59441 4.63206 6.28581 5.51795 6.28581H17.4813C19.6385 6.28581 21.3996 8.14945 21.3996 10.4321V10.9173C21.3996 11.5239 20.9307 12.0201 20.3575 12.0201ZM6.28907 11.7996H13.5838C14.0111 11.7996 14.3654 11.4246 14.3654 10.9725C14.3654 10.5204 14.0111 10.1454 13.5838 10.1454H6.28916C5.86181 10.1454 5.50747 10.5204 5.50747 10.9725C5.50747 11.4246 5.86181 11.7996 6.28907 11.7996Z"
                        fill="#191D3E"
                      />
                    </svg>
                  </button>
                </div>
                <div className="share_winned_process_btn">
                  <button>Поделиться</button>
                </div>
              </div>
            </div>
          ) : (
            <div className="case_opening_process_btn">
              <button>
                <p>ОТКРЫВАЕТСЯ</p> <img src={loading} alt="" />
              </button>
            </div>
          )}
        </div>
        <h2>{selectedId}</h2>
      </div>
    </>
  );
}

export default CaseOpening;
