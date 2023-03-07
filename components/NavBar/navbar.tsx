import styles from "./navbar.module.scss";
import Image from "next/image";
import logo from "../../assets/images/logoPhotoshop.png";
import { Menubar } from "primereact/menubar";
import Link from "next/link";

const NavBar = () => {
  const links = [
    {
      url: "/",
      label: "Accueil",
    },
    {
      label: "Magasinage",
      items: [
        {
          label: "Rayonnage métallique",
          url: "/magasinage/rayonnage-metallique",
        },
        {
          label: "Rayonnage industriel",
          url: "/magasinage/rayonnage-industriel",
        },
        { label: "Rayonnage d'archive", url: "/magasinage/rayonnage-archive" },
      ],
    },
    {
      url: "/agencement",
      label: "Agencement",
    },
    {
      url: "/services",
      label: "Services",
    },
    {
      url: "/contact",
      label: "Contact",
    },
  ];

  const start = (
    <Link href={"/"}>
      <Image
        src={logo}
        alt="logo-mc-montage"
        title="logo MC Montage"
        className={styles.image}
        height={50}
        width={100}
      />
    </Link>
  );

  return (
    <nav className={styles.nav}>
      <Menubar model={links} start={start} />
    </nav>
  );
};

export default NavBar;
