import "./presentation.scss";
import logo from "../../assets/images/logo.png";

const Presentation = () => {
  return (
    <main className="presentation" id="presentation">
      <div className="presentation__container__title">
        {/* <h1>MC</h1> <h1>Montage</h1> */}
        <img src={logo} alt="" />
      </div>
      <div className="presentation__container__text">
        <p>
          MC Montage est une société spécialisée dans le montage de rayonnages,
          pose de cloison, de mezzanine, de faux plafond et d'agencement de
          bureau depuis plus de 14 ans. Les chantiers sont principalement dans
          la région du Grand EST mais également dans toute la France et même
          l'étranger.
        </p>
      </div>
    </main>
  );
};

export default Presentation;
