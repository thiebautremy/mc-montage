import { useState } from "react";
import "./diaporama.scss";
import bg1 from "../../../assets/images/1.webp";
import bg2 from "../../../assets/images/2.webp";
import bg3 from "../../../assets/images/3.webp";
import bg4 from "../../../assets/images/4.webp";
import bg5 from "../../../assets/images/5.webp";
import bg6 from "../../../assets/images/6.webp";
import bg7 from "../../../assets/images/7.webp";
import bg8 from "../../../assets/images/8.webp";
import bg9 from "../../../assets/images/9.webp";
import bg10 from "../../../assets/images/10.webp";
import bg11 from "../../../assets/images/11.webp";

const Diaporama = () => {
  let [activeBackgroundId, setActiveBackgroundId] = useState(0);

  const handleSelect = (action) => {
    let newIndex = activeBackgroundId;
    action === "prec"
      ? setActiveBackgroundId(
          newIndex === 0 ? backgrounds.length - 1 : newIndex - 1
        )
      : setActiveBackgroundId(
          newIndex === backgrounds.length - 1 ? 0 : newIndex + 1
        );
  };

  const backgrounds = [
    {
      id: 0,
      bg: bg1,
    },
    {
      id: 1,
      bg: bg2,
    },
    {
      id: 2,
      bg: bg3,
    },
    {
      id: 3,
      bg: bg4,
    },
    {
      id: 4,
      bg: bg5,
    },
    {
      id: 5,
      bg: bg6,
    },
    {
      id: 6,
      bg: bg7,
    },
    {
      id: 7,
      bg: bg8,
    },
    {
      id: 8,
      bg: bg9,
    },
    {
      id: 9,
      bg: bg10,
    },
    {
      id: 10,
      bg: bg11,
    },
  ];
  return (
    <div id="carousel">
      <div
        className="carousel__container"
        style={{
          backgroundImage: `url(${backgrounds[activeBackgroundId].bg})`,
        }}
      ></div>
      <div className="container__pagination">
        {backgrounds.map((item, index) => (
          <div
            key={index}
            className={
              index === activeBackgroundId
                ? "container__pagination__item actif"
                : "container__pagination__item"
            }
            onClick={(e) => setActiveBackgroundId(index)}
          ></div>
        ))}
      </div>
      <button
        type="button"
        onClick={() => handleSelect("prec")}
        className="buttonDiapo buttonDiapo--left"
        aria-label="Bouton précèdent"
      >
        <i className="pi pi-chevron-left" aria-hidden="true"></i>
      </button>
      <button
        type="button"
        onClick={() => handleSelect("suiv")}
        className="buttonDiapo buttonDiapo--right"
        aria-label="Bouton suivant"
      >
        <i className="pi pi-chevron-right" aria-hidden="true"></i>
      </button>
    </div>
  );
};

export default Diaporama;
