import Image, { StaticImageData } from "next/image";
import styles from "./feature.module.scss";
import { motion } from "framer-motion";

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
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div className={styles.feature}>
        <style jsx>{`
          .feature {
            flex-direction: ${isInverted ? "row-reverse" : "row"};
          }
        `}</style>
        <div className={styles.description}>
          <p>{text.toString()}</p>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src={imgSrc}
            alt={imgAlt}
            title={imgTitle}
            fill
            className={styles.image}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Feature;
