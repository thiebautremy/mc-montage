import styles from "./contactBanner.module.scss";
import { motion } from "framer-motion";
import { MdOutlineMarkEmailRead, MdPhoneInTalk } from "react-icons/md";
import { BsClockHistory } from "react-icons/bs";

const ContactBanner = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
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
            Ouvert du lundi au vendredi de 07h30 à 20h
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactBanner;
