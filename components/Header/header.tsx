import CallToAction from "./CallToAction/callToAction";
import styles from "./header.module.scss";
import NavBar from "../NavBar/navbar";

const Header = () => {
  return (
    <header id="header" className={styles.header}>
      <NavBar />
      <CallToAction />
    </header>
  );
};

export default Header;
