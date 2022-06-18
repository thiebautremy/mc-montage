import "./description.scss";
import Diaporama from "./Diaporama/diaporama";

const Description = () => {
  return (
    <div className="description" id="description">
      <h2>Nos services et nos réalisations</h2>
      <section className="description__services">
        <p>Nous proposons une large gamme de service</p>
        <div className="description__services__items">
          <div className="description__services__items__item">
            <h3>Rayonnages</h3>
            <p>Montage</p>
            <p>Démontage</p>
            <p>Stockage palettes et archives</p>
            <p>SAV</p>
          </div>
          <div className="description__services__items__item">
            <h3>Optimisation</h3>
            <p>Pose de cloison amovible en aluminium</p>
            <p>Agencement bureau</p>
            <p>Mezzanine</p>
            <p>Faux plafond</p>
          </div>
        </div>
      </section>
      <Diaporama />
    </div>
  );
};

export default Description;
