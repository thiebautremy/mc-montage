import { useCallback } from "react";
import Image from "next/image";
import styles from "./slider.module.scss";
import Marquee from "react-fast-marquee";
import bito from "../../assets/images/partners/bito.png";
import bruynzeel from "../../assets/images/partners/bruynzeel.png";
import feralp from "../../assets/images/partners/feralp.png";
import loraltec from "../../assets/images/partners/loraltec.jpg";
import mecalux from "../../assets/images/partners/mecalux.png";
import polypal from "../../assets/images/partners/polypal.png";
import rsl from "../../assets/images/partners/rsl.png";
import sre from "../../assets/images/partners/sre.png";
import { motion } from "framer-motion";

const SliderParterns = () => {
  const images = [
    {
      id: 0,
      filename: bito,
      alt: "logo BITO",
      src: "https://www.bito.com/fr-fr/",
    },
    {
      id: 1,
      filename: bruynzeel,
      alt: "logo Bruynzeel",
      src: "https://bruynzeel.fr/",
    },
    {
      id: 2,
      filename: feralp,
      alt: "logo Feralp",
      src: "https://www.feralp.fr/",
    },
    {
      id: 3,
      filename: loraltec,
      alt: "logo Loraltec",
      src: "https://www.loraltec.com/",
    },
    {
      id: 4,
      filename: mecalux,
      alt: "logo Mecalux",
      src: "https://www.mecalux.fr/",
    },
    {
      id: 5,
      filename: polypal,
      alt: "logo Polypal",
      src: "https://www.polypal.com/fr",
    },
    { id: 6, filename: rsl, alt: "logo RSL", src: "https://rsl.eu/" },
    { id: 7, filename: sre, alt: "logo SRE", src: "https://sre.fr/" },
  ];
  const getImageArray = useCallback(
    (images: any[]) => (
      <>
        {images.map((image) => (
          <div className={styles.imageWrapper} key={image.id}>
            <a href={image.src}>
              <Image src={image.filename} alt={image.alt} fill loading="lazy" />
            </a>
          </div>
        ))}
      </>
    ),
    []
  );
  return (
    <motion.div
      animate={{ x: [250, -10] }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div className={styles.slider}>
        <h2>Nos partenaires</h2>
        <Marquee speed={30} gradient={false} className={styles.marquee}>
          {getImageArray(images)}
        </Marquee>
      </div>
    </motion.div>
  );
};

export default SliderParterns;
