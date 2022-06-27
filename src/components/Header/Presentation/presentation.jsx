import "./presentation.scss";
import logo from "../../../assets/images/logoPhotoshop.png";

const Presentation = () => {
  return (
    <div className="presentation" id="presentation">
      <div className="presentation__container__title">
        <img src={logo} alt="logo MC Montage" title="Logo MC Montage" />
      </div>
      <div className="presentation__container__text">
        <p>
          MC Montage est une société spécialisée dans le montage de rayonnages,
          pose de cloison, mezzanine, faux plafond et d'agencement de bureau
          depuis plus de 14 ans.
        </p>
        <p>
          Les chantiers sont principalement dans la région du Grand EST mais
          également dans toute la France et même à l'étranger.
        </p>
      </div>
    </div>
  );
};

export default Presentation;
