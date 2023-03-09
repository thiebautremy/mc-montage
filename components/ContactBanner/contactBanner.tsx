import styles from "./contactBanner.module.scss";
import { MdOutlineMarkEmailRead, MdPhoneInTalk } from "react-icons/md";
import { BsClockHistory } from "react-icons/bs";

const ContactBanner = () => {
  return (
    <div className={styles.contactBanner}>
      <h3>Une question ? Besoin d&apos;un devis ? Contactez-nous !</h3>
      <div className={styles.contactInfos}>
        <p className={styles.contactInfo}>
          <MdOutlineMarkEmailRead />
          <a
            href="mailto: mcmontage54450@gmail.com"
            className={styles.footer__container__mailEtNumero__mail}
          >
            mcmontage54450@gmail.com
          </a>
        </p>
        <p className={styles.contactInfo}>
          <MdPhoneInTalk /> 06 81 21 38 73
        </p>
        <p className={styles.contactInfo}>
          <BsClockHistory />
          Ouvert du lundi au vendredi de 07:30 à 20h00
        </p>
      </div>
    </div>
  );
};

export default ContactBanner;
