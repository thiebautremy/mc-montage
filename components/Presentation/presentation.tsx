import Image from "next/image";
import styles from "./presentation.module.scss";
import camion from "../../assets/images/camion-transformed.png";
import DividerVertical from "../Dividers/dividerVertical";
import DividerHorizontal from "../Dividers/dividerHorizontal";
import { motion } from "framer-motion";

const Presentation = () => {
  return (
    <>
      <section className={styles.presentation}>
        <div className={styles.text}>
          <h1>MC Montage</h1>
          <div className={styles.subtitle}>
            <p>
              MC Montage est une société spécialisée dans le montage de
              rayonnages, pose de cloison, mezzanine, faux plafond et
              d&apos;agencement de bureau depuis plus de 15 ans.
            </p>
            <p>
              Les chantiers sont principalement dans la région du Grand EST mais
              également dans toute la France et même à l&apos;étranger.
            </p>
          </div>
          <div className={styles.servicesContainer}>
            <p className={styles.servicesContainer__title}>
              Nous proposons une large gamme de service
            </p>
            <div className={styles.services}>
              <div className={styles.service}>
                <h3>Magasinage</h3>
                <ul>
                  <li>Rayonnage industriel</li>
                  <li>Rayonnage d&apos;archive</li>
                  <li>Rayonnage métallique</li>
                </ul>
              </div>
              <DividerVertical />
              <div className={styles.service}>
                <h3>Agencement</h3>
                <ul>
                  <li>Pose de cloison amovible en aluminium</li>
                  <li>Agencement bureau</li>
                  <li>Mezzanine</li>
                  <li>Faux plafond</li>
                  <li>Plateforme</li>
                </ul>
              </div>
              <DividerVertical />
              <div className={styles.service}>
                <h3>Stockage</h3>
                <ul>
                  <li>Pose de rack à palettes</li>
                  <li>Pose d&apos;étagères sur rail</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <motion.div
          animate={{ x: [250, -10] }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <Image
            src={camion}
            alt="Camion MC Montage garé devant un bâtiment"
            title="Camion MC Montage"
            width={462}
            height={280}
            className={styles.image}
          />
        </motion.div>
      </section>
      <DividerHorizontal />
    </>
  );
};

export default Presentation;
