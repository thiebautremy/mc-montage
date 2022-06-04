import { useState } from "react";
import "./diaporama.scss";

const Diaporama = () => {
  const [indexDiaporama, setIndexDiaporama] = useState(0);

  const handleSelect = (action) => {
    let newIndex = indexDiaporama;
    action === "prec"
      ? setIndexDiaporama(newIndex === 0 ? data.length - 1 : newIndex - 1)
      : setIndexDiaporama(newIndex === data.length - 1 ? 0 : newIndex + 1);
  };

  const data = [
    {
      id: 0,
      imageSrc: "moutains",
      lieu: "Metz",
      description: "Premier chantier",
    },
    {
      id: 1,
      imageSrc: "sea",
      lieu: "Lunéville",
      description: "Deuxième chantier",
    },
    {
      id: 2,
      imageSrc: "tree",
      lieu: "Nancy",
      description: "Troisième chantier",
    },
    {
      id: 3,
      imageSrc: "sea",
      lieu: "Paris",
      description:
        "Dernier chantier avec une description un peu plus longue pour voir si ça rentre bien dans le container",
    },
  ];

  return (
    <div id="carousel">
      {data
        .filter((item) => item.id === indexDiaporama)
        .map((item, index) => (
          <div className="carousel__container" key={index}>
            <img
              src={require("../../assets/images/" + item.imageSrc + ".jpg")}
              className=""
              alt={item.imageSrc}
            />
            <div className="carousel__container__text">
              <h2>
                <i className="pi pi-map"></i> {item.lieu}
              </h2>
              <h3>
                <i className="pi pi-book"></i> {item.description}
              </h3>
            </div>
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
