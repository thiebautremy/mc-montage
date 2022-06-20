import { useState } from "react";
import "./diaporama.scss";

const Diaporama = () => {
  const [indexDiaporama, setIndexDiaporama] = useState(0);

  const handleSelect = (action) => {
    let newIndex = indexDiaporama;
    const currentImage = document.querySelector(".carousel__container img");

    if (currentImage.classList.contains("actif"))
      currentImage.classList.remove("actif");

    setTimeout(() => {
      currentImage.classList.add("actif");
      action === "prec"
        ? setIndexDiaporama(newIndex === 0 ? data.length - 1 : newIndex - 1)
        : setIndexDiaporama(newIndex === data.length - 1 ? 0 : newIndex + 1);
    }, [100]);
  };

  const data = [
    {
      id: 0,
      imageSrc: "1",
    },
    {
      id: 1,
      imageSrc: "2",
    },
    {
      id: 2,
      imageSrc: "3",
    },
    {
      id: 3,
      imageSrc: "4",
    },
  ];

  return (
    <div id="carousel">
      {data
        .filter((item) => item.id === indexDiaporama)
        .map((item, index) => (
          <div className="carousel__container" key={index}>
            <img
              src={require("../../../assets/images/" + item.imageSrc + ".jpeg")}
              alt={item.imageSrc}
            />
          </div>
        ))}
      <div className="container__pagination">
        {data.map((item, index) => (
          <div
            key={index}
            className={
              index === indexDiaporama
                ? "container__pagination__item actif"
                : "container__pagination__item"
            }
            onClick={(e) => setIndexDiaporama(index)}
          ></div>
        ))}
      </div>
      <button
        type="button"
        onClick={() => handleSelect("prec")}
        className="buttonDiapo buttonDiapo--left"
      >
        <i className="pi pi-chevron-left"></i>
      </button>
      <button
        type="button"
        onClick={() => handleSelect("suiv")}
        className="buttonDiapo buttonDiapo--right"
      >
        <i className="pi pi-chevron-right"></i>
      </button>
    </div>
  );
};

export default Diaporama;
