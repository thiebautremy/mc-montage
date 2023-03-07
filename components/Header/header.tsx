import Presentation from "./Presentation/presentation";
import styles from "./header.module.scss";
import NavBar from "../NavBar/navbar";

const Header = () => {
  return (
    <header id="header" className={styles.header}>
      <NavBar />
      <Presentation />
    </header>
  );
};

export default Header;
