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
  ];

  return (
    <div id="carousel">
      {data
        .filter((item) => item.id === indexDiaporama)
        .map((item, index) => (
          <div className="carousel__container" key={index}>
            <img
              src={require("../../assets/images/" + item.imageSrc + ".jpg")}
              className="img-fluid"
              alt={item.imageSrc}
            />
            <h2>{item.lieu}</h2>
            <h3>{item.description}</h3>
          </div>
        ))}
      <button type="button" onClick={() => handleSelect("prec")}>
        Précèdent
      </button>
      <button type="button" onClick={() => handleSelect("suiv")}>
        Suivant
      </button>
    </div>
  );
};

export default Diaporama;
