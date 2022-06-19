import "./description.scss";
import Diaporama from "./Diaporama/diaporama";

const Description = () => {
  return (
    <div className="description" id="description">
      <h2>Services et réalisations</h2>
      <section className="description__services">
        <p>Nous proposons une large gamme de service</p>
        <div className="description__services__items">
          <div className="description__services__items__item">
            <h3>Rayonnages</h3>
            <ul>
              <li>Montage</li>
              <li>Démontage</li>
              <li>Stockage palettes et archives</li>
              <li>SAV</li>
            </ul>
          </div>
          <div className="divider--vertical"></div>
          <div className="description__services__items__item">
            <h3>Optimisation</h3>
            <ul>
              <li>Pose de cloison amovible en aluminium</li>
              <li>Agencement bureau</li>
              <li>Mezzanine</li>
              <li>Faux plafond</li>
            </ul>
          </div>
        </div>
      </section>
      <Diaporama />
    </div>
  );
};

export default Description;
