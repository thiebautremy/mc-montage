import { useState } from "react";
import "./footer.scss";
import logo from "../../assets/images/logoPhotoshop.png";
import VisibilitySensor from "react-visibility-sensor";

const Footer = () => {
  const [visible, setIsVisible] = useState(false);

  return (
    <VisibilitySensor partialVisibility onChange={() => setIsVisible(!visible)}>
      <footer id="footer" className={visible ? "footer" : "footer visible"}>
        <div className="footer__container__left">
          <img src={logo} alt="logo MC Montage" title="Logo MC Montage" />
        </div>
        <div className="footer__container__right">
          <div className="footer__container__adresse">
            <p>Notre adresse :</p>
            <p>SARL MC MONTAGE</p>
            <p>16 rue de Chenevières</p>
            <p>54450 Bénaménil</p>
          </div>
          <div className="divider--vertical"></div>
          <div className="footer__container__mailEtNumero">
            <p>Mr GERL Mickael (gérant)</p>
            <p>
              <i className="pi pi-phone"></i> 06 81 21 38 73
            </p>
            <p>
              <span>@</span> mc.montage@orange.fr
            </p>
          </div>
        </div>
      </footer>
    </VisibilitySensor>
  );
};

export default Footer;
