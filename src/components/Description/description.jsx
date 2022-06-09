import "./description.scss";
import Diaporama from "./Diaporama/diaporama";

const Description = () => {
  return (
    <div className="description">
      <h2>Nos services et nos réalisations</h2>
      <section className="description__services">
        <p>Nous proposons une large gamme de service</p>
        <div className="description__services__items">
          <div className="description__services__items__item">
            <h3>Montage</h3>
            <p>Nous pouvons monter plusieurs types de rayonnage.</p>
          </div>
          <div className="description__services__items__item">
            <h3>Optimisation</h3>
            <p>
              Nous optimisons l'espace pour garantir à nos clients un potentiel
              de rangement optimal.
            </p>
          </div>
          <div className="description__services__items__item">
            <h3>SAV</h3>
            <p>Notre pose est garantie 10 ans.</p>
          </div>
        </div>
      </section>
      <Diaporama />
    </div>
  );
};

export default Description;
