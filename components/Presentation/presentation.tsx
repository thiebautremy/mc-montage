import Image from "next/image";
import styles from "./presentation.module.scss";
import camion from "../../assets/images/camion.webp";

const Presentation = () => {
  return (
    <div className={styles.presentation}>
      <div className={styles.text}>
        <p>
          MC Montage est une société spécialisée dans le montage de rayonnages,
          pose de cloison, mezzanine, faux plafond et d&apos;agencement de
          bureau depuis plus de 15 ans.
        </p>
        <p>
          Les chantiers sont principalement dans la région du Grand EST mais
          également dans toute la France et même à l&apos;étranger.
        </p>
        <p>Nous proposons une large gamme de service</p>
        <div className={styles.services}>
          <div className={styles.service}>
            <h3>Rayonnages</h3>
            <ul>
              <li>Montage</li>
              <li>Démontage</li>
              <li>Stockage palettes et archives</li>
              <li>SAV</li>
            </ul>
          </div>
          <div className={styles.divider__vertical}></div>
          <div className={styles.service}>
            <h3>Optimisation</h3>
            <ul>
              <li>Pose de cloison amovible en aluminium</li>
              <li>Agencement bureau</li>
              <li>Mezzanine</li>
              <li>Faux plafond</li>
            </ul>
          </div>
        </div>
      </div>
      <Image
        src={camion}
        alt="Camion MC Montage garé devant un bâtiment"
        title="Camion MC Montage"
        width={550}
        height={500}
        className={styles.image}
      />
    </div>
  );
};

export default Presentation;
