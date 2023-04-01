import React from "react";
import styles from "./footer.module.scss";
import Image from "next/image";
import Link from "next/link";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { motion } from "framer-motion";
import { MdOutlineMarkEmailRead, MdPhoneInTalk } from "react-icons/md";
import logo from "../../assets/images/logoPhotoshop.png";

const Footer = () => {
  const position = [48.5662876, 6.6714822];

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
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
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
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
              <p className={styles.footer__container__mailEtNumero__numero}>
                <MdPhoneInTalk /> 06 81 21 38 73
              </p>
              <p className={styles.footer__container__mailEtNumero__mail}>
                <MdOutlineMarkEmailRead />
                <a href="mailto:mcmontage54450@gmail.com">
                  mcmontage54450@gmail.com
                </a>
              </p>
            </div>
          </div>
        </footer>
        <div className={styles.subFooter}>
          <Link href="/mentions-legales">
            <p>Mentions légales</p>
          </Link>
          <p className={styles.subFooter__mail}>
            Site internet réalisé par <MdOutlineMarkEmailRead />
            <a href="mailto:remythiebaut52@gmail.com">Rémy THIEBAUT</a>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;
