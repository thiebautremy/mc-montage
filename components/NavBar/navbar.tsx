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
      label: "Stockage",
      items: [
        {
          label: "Rayonnage mobile archives",
          url: "/stockage/rayonnage-mobile-archives",
        },
        {
          label: "Rayonnage métallique industriel",
          url: "/stockage/rayonnage-metallique-industriel",
        },
      ],
    },
    {
      label: "Agencement",
      items: [
        {
          label: "Bureau",
          url: "/agencement/bureau",
        },
        {
          label: "Mezzanine et Plateforme",
          url: "/agencement/mezzanine-plateforme",
        },
        {
          label: "Pose de cloison et faux plafond",
          url: "/agencement/cloison-faux-plafond",
        },
      ],
    },
    {
      label: "Services",
      items: [
        {
          label: "Montage / Démontage",
          url: "/services/montage-demontage",
        },
        {
          label: "SAV / Maintenance",
          url: "/services/sav-maintenance",
        },
        {
          label: "Devis",
          url: "/services/devis",
        },
      ],
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
