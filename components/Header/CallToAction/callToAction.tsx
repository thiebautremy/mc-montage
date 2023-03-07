import styles from "./callToAction.module.scss";
import logo from "../../../assets/images/logoPhotoshop.png";
import Image from "next/image";
import ContactBtn from "../../Buttons/contactBtn";

const CallToAction = () => {
  return (
    <div className={styles.callToAction}>
      <div className={styles.container__logo}>
        <Image
          src={logo}
          alt="logo MC Montage"
          title="Logo MC Montage"
          width={500}
          height={250}
        />
      </div>
      <div className={styles.container__text}>
        <p className={styles.container__text__first}>
          Une expertise de plus de 15 années.
        </p>
        <p className={styles.container__text__second}>
          <strong>Contactez-nous</strong> pour réaliser votre projet !
        </p>
        <ContactBtn />
      </div>
    </div>
  );
};

export default CallToAction;
