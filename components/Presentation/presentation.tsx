import Image from "next/image";
import styles from "./presentation.module.scss";
import camion from "../../assets/images/camion-transformed.png";
import DividerVertical from "../Dividers/dividerVertical";
import DividerHorizontal from "../Dividers/dividerHorizontal";
import Spacer from "../Spacer/spacer";
import { motion } from "framer-motion";

const Presentation = () => {
  return (
    <>
      <section className={styles.presentation}>
        <div className={styles.text}>
          <h1>MC Montage</h1>
          <h2>
            Société spécialisée dans le rayonnage industriel de stockage dans le
            Grand Est.
          </h2>
          <div className={styles.subtitle}>
            <p>
              <span className="fontColorRed fontBold">MC Montage</span> offre
              une gamme complète de services pour les entreprises de toutes
              tailles et de tous secteurs d&apos;activité. Que vous souhaitiez
              créer de nouveaux espaces de travail, augmenter votre surface de
              stockage ou simplement optimiser l&apos;espace disponible, notre
              équipe de professionnels expérimentés est là pour vous aider à
              réaliser vos projets{" "}
              <span className="fontColorRed fontBold">
                depuis plus de 15 ans.
              </span>
            </p>
            <Spacer height={"small"} />
            <p>
              En outre, nous proposons des solutions de stockage et{" "}
              <span className="fontColorRed fontBold">
                d&apos;optimisation de l&apos;espace
              </span>{" "}
              pour aider nos clients à gagner de la place et à maximiser leur
              productivité. Nous travaillons avec des matériaux de qualité
              supérieure pour garantir une finition professionnelle et durable.
            </p>
            <Spacer height={"small"} />
            <p>
              Nous sommes passionnés par la création d&apos;espaces de travail
              fonctionnels, esthétiques et optimisés. Nous sommes là pour vous
              aider à réaliser votre vision, en fournissant des{" "}
              <span className="fontColorRed fontBold">
                services d&apos;agencement sur mesure
              </span>{" "}
              et adaptés à vos besoins spécifiques.
            </p>
            <Spacer height={"small"} />
            <p>
              Les chantiers sont principalement dans la région du Grand EST mais
              également dans toute la France et même à l&apos;étranger.
            </p>
            <Spacer height={"medium"} />
            <p>
              N&apos;hésitez pas à nous contacter pour en savoir plus sur nos
              services d&apos;agencement et de rangement et obtenir un devis
              personnalisé pour votre projet. Nous sommes impatients de
              travailler avec vous pour{" "}
              <span className="fontColorRed fontBold">
                créer un espace de travail idéal pour votre entreprise
              </span>{" "}
              et améliorer votre espace de stockage.
            </p>
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
      <div className={styles.servicesContainer}>
        <h2>Nos solutions :</h2>
        <div className={styles.services}>
          <div className={styles.service}>
            <h3>Magasinage</h3>
            <ul>
              <li>
                <h4>Rayonnage industriel neuf ou d&apos;occasion</h4>
              </li>
              <li>
                <h4>Rayonnage d&apos;archive</h4>
              </li>
              <li>
                <h4>Rayonnage métallique</h4>
              </li>
              <li>
                <h4>Rayonnage cantilever</h4>
              </li>
              <li>
                <h4>Rayonnage dynamique</h4>
              </li>
            </ul>
          </div>
          <DividerVertical />
          <div className={styles.service}>
            <h3>Agencement</h3>
            <ul>
              <li>
                <h4>Pose de cloison amovible en aluminium</h4>
              </li>
              <li>
                <h4>Agencement bureau</h4>
              </li>
              <li>
                <h4>Mezzanine</h4>
              </li>
              <li>
                <h4>Faux plafond</h4>
              </li>
              <li>
                <h4>Plateforme avec ou sans échelles</h4>
              </li>
            </ul>
          </div>
          <DividerVertical />
          <div className={styles.service}>
            <h3>Stockage</h3>
            <ul>
              <li>
                <h4>Pose de rack à palettes</h4>
              </li>
              <li>
                <h4>Pose d&apos;étagères sur rail</h4>
              </li>
              <li>
                <h4>Étagère modulable</h4>
              </li>
              <li>
                <h4>Tablettes</h4>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <DividerHorizontal />
    </>
  );
};

export default Presentation;
