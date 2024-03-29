import Image, { StaticImageData } from "next/image";
import styles from "./feature.module.scss";
import { motion } from "framer-motion";
import parse from "html-react-parser";

type FeatureProps = {
  id: number;
  text: string;
  legend: string | undefined;
  imgSrc: StaticImageData;
  imgAlt: string;
  imgTitle: string;
  isInverted?: boolean;
};
const Feature: React.FC<FeatureProps> = ({
  text,
  legend,
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
          <div>{parse(text)}</div>
        </div>
        <div className={styles.imageWrapper}>
          <figure>
            <Image
              src={imgSrc}
              alt={imgAlt}
              title={imgTitle}
              loading="eager"
              fill
              className={styles.image}
              style={{ objectFit: "cover" }}
            />
            {legend && (
              <figcaption className={styles.legend}>{parse(legend)}</figcaption>
            )}
          </figure>
        </div>
      </div>
    </motion.div>
  );
};

export default Feature;
