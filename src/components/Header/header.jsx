import { useState, useEffect } from "react";
import "./header.scss";
import { SpeedDial } from "primereact/speeddial";

const Header = () => {
  console.log(window.innerWidth);
  const [mobileWidth, setMobileWidth] = useState();

  useEffect(() => {
    window.innerWidth >= 500 ? setMobileWidth(false) : setMobileWidth(true);
  }, [mobileWidth]);

  const items = [
    {
      label: "Contact",
      icon: "pi pi-refresh",
      command: () => {
        console.log("Contact");
      },
    },
    {
      label: "Chiffres clés",
      icon: "pi pi-trash",
      command: () => {
        console.log("Chiffres clés");
      },
    },
    {
      label: "Présentation",
      icon: "pi pi-pencil",
      command: () => {
        console.log("Présentation");
      },
    },
  ];

  return (
    <header id="header">
      <nav>
        <ul>
          {!mobileWidth ? (
            <>
              <a href="#presentation">
                <li>Présentation</li>
              </a>
              <a href="#chiffresCles">
                <li>Chiffres Clés</li>
              </a>
              <a href="#contact">
                <li>Contact</li>
              </a>
            </>
          ) : (
            <SpeedDial
              model={items}
              radius={120}
              direction="down-left"
              type="quarter-circle"
              buttonClassName="p-button-success"
            />
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
