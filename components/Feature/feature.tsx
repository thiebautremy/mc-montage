import Image, { StaticImageData } from "next/image";
import styles from "./feature.module.scss";
import { motion } from "framer-motion";
import parse from "html-react-parser";

type FeatureProps = {
  text: string;
  imgSrc: StaticImageData;
  imgAlt: string;
  imgTitle: string;
  isInverted?: boolean;
};
const Feature: React.FC<FeatureProps> = ({
  text,
  imgSrc,
  imgAlt,
  imgTitle,
  isInverted,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div className={`${styles.feature} ${isInverted && styles.isInverted}`}>
        <div className={styles.description}>
          <p>{parse(text)}</p>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src={imgSrc}
            alt={imgAlt}
            title={imgTitle}
            fill
            className={styles.image}
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Feature;
