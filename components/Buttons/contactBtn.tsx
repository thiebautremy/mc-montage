import Link from "next/link";
import styles from "./contactBtn.module.scss";

const ContactBtn = () => {
  return (
    <Link href={"/contact"}>
      <button className={styles.ctaBtn}>
        <span>Contactez-nous</span>
      </button>
    </Link>
  );
};

export default ContactBtn;
