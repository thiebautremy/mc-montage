import React from "react";
import styles from "./footer.module.scss";
import logo from "../../assets/images/logoPhotoshop.png";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import Image from "next/image";

const Footer = () => {
  const position = [48.5662876, 6.6714822];

  return (
    <div>
      <div className={styles.mapContainer}>
        <MapContainer
          className={styles.map}
          center={position}
          zoom={10}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}></Marker>
        </MapContainer>
      </div>
      <footer className={styles.footer}>
        <div className={styles.footer__container__left}>
          <Image
            src={logo}
            alt="logo MC Montage"
            title="Logo MC Montage"
            height={100}
            width={200}
          />
        </div>
        <div className={styles.footer__container__right}>
          <div className={styles.footer__container__adresse}>
            <p className={styles.underline}>Notre adresse :</p>
            <p>SARL MC MONTAGE</p>
            <p>16 rue de Chenevières</p>
            <p>54450 Bénaménil</p>
          </div>
          <div className={styles.divider__vertical}></div>
          <div className={styles.footer__container__mailEtNumero}>
            <p className={styles.underline}>Nos coordonnées :</p>
            <p>Mr GERL Mickael (gérant)</p>
            <p>
              <i className="pi pi-phone"></i> 06 81 21 38 73
            </p>
            <p>
              <span>@</span>{" "}
              <a
                href="mailto: mcmontage54450@gmail.com"
                className={styles.footer__container__mailEtNumero__mail}
              >
                mcmontage54450@gmail.com
              </a>
            </p>
          </div>
        </div>
      </footer>
      <div>
        <p>Mentions légales</p>
      </div>
    </div>
  );
};

export default Footer;
