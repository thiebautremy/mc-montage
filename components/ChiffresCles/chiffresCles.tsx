import styles from "./chiffresCles.module.scss";
import { motion } from "framer-motion";
import DividerVertical from "../Dividers/dividerVertical";

const ChiffresCles = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <section className={styles.chiffresCles}>
        <h2 className={styles.chiffresClesTitle}>Chiffres clés</h2>
        <div className={styles.chiffres}>
          <p>
            <span>6</span>Salariés
          </p>
          <DividerVertical />
          <p>
            <span>3360</span>Chantiers
          </p>
          <DividerVertical />
          <p>
            <span>Plus de 100</span>entreprises qui nous ont fait confiance
          </p>
        </div>
      </section>
    </motion.div>
  );
};

export default ChiffresCles;
