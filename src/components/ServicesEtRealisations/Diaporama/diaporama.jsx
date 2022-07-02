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
      imageSrc: "15",
      title: "Rayonnage alu",
    },
    {
      id: 1,
      imageSrc: "2",
      title: "Rayonnage alu",
    },
    {
      id: 2,
      imageSrc: "3",
      title: "Mezzanine",
    },
    {
      id: 3,
      imageSrc: "4",
      title: "Agencement bureau",
    },
    {
      id: 4,
      imageSrc: "6",
      title: "Cloison amovible en aluminium",
    },
    {
      id: 5,
      imageSrc: "7",
      title: "Camionnette MC Montage",
    },
    {
      id: 6,
      imageSrc: "8",
      title: "Stockage palettes",
    },
    {
      id: 7,
      imageSrc: "9",
      title: "Stockage palettes",
    },
    {
      id: 8,
      imageSrc: "10",
      title: "Agencement bureau",
    },
    {
      id: 9,
      imageSrc: "11",
      title: "Agence bureau avec mezzanine et escalier",
    },
  ];

  return (
    <div id="carousel">
      {data
        .filter((item) => item.id === indexDiaporama)
        .map((item, index) => (
          <div className="carousel__container" key={index}>
            <img
              src={require("../../../assets/images/" + item.imageSrc + ".webp")}
              alt={item.title}
              title={item.title}
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
