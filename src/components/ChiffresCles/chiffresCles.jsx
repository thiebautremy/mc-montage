import { useState } from "react";
import "./chiffresCles.scss";
import VisibilitySensor from "react-visibility-sensor";

const ChiffresCles = () => {
  const [visible, setIsVisible] = useState(false);

  return (
    <VisibilitySensor partialVisibility onChange={() => setIsVisible(!visible)}>
      <section
        id="chiffresCles"
        className={visible ? "chiffresCles" : "chiffresCles visible"}
      >
        <h2>Chiffres clés</h2>
        <div className="chiffresCles__chiffres">
          <p>
            <span>4</span>Salariés
          </p>
          <p>
            <span>1530</span>Chantiers
          </p>
          <p>
            <span>Plus de 30</span>Entreprises nous ont fait confiance
          </p>
        </div>
      </section>
    </VisibilitySensor>
  );
};

export default ChiffresCles;
