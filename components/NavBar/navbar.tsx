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
      label: "Agencement",
      items: [
        {
          label: "Bureau",
          url: "/agencement/bureau",
        },
        {
          label: "Mezzanine",
          url: "/agencement/mezzanine",
        },
        { label: "Pose de cloison", url: "/agencement/pose-de-cloison" },
        { label: "Faux plafond", url: "/agencement/faux-plafond" },
        { label: "Plateforme", url: "/agencement/plateforme" },
      ],
    },
    {
      label: "Stockage",
      items: [
        {
          label: "Rack à palettes",
          url: "/stockage/rack-a-palettes",
        },
        {
          label: "Etagères sur rail",
          url: "/stockage/etageres-sur-rail",
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
