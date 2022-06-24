import "./footer.scss";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer__container">
        <div className="footer__container__adresse">
          <p>Notre adresse :</p>
          <p>SARL MC MONTAGE</p>
          <p>5 bis rue de lorraine</p>
          <p>54300 Croismare</p>
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
  );
};

export default Footer;
