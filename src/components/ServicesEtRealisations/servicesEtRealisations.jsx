import "./servicesEtRealisations.scss";
import Diaporama from "./Diaporama/diaporama";

const ServicesEtRealisations = () => {
  return (
    <div className="servicesEtRealisations" id="servicesEtRealisations">
      <h2>Services et réalisations</h2>
      <section className="servicesEtRealisations__services">
        <p>Nous proposons une large gamme de service</p>
        <div className="servicesEtRealisations__services__items">
          <div className="servicesEtRealisations__services__items__item">
            <h3>Rayonnages</h3>
            <ul>
              <li>Montage</li>
              <li>Démontage</li>
              <li>Stockage palettes et archives</li>
              <li>SAV</li>
            </ul>
          </div>
          <div className="divider--vertical"></div>
          <div className="servicesEtRealisations__services__items__item">
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

export default ServicesEtRealisations;
