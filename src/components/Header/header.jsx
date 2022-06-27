/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useRef } from "react";
import Presentation from "./Presentation/presentation";
import logo from "../../assets/images/logoPhotoshop.png";
import "./header.scss";

const Header = () => {
  const [activeLink, setActiveLink] = useState(0);
  const [scrollUnderHeader, setScrollUnderHeader] = useState(false);
  const links = [
    {
      id: 1,
      href: "#presentation",
      title: "Présentation",
    },
    {
      id: 2,
      href: "#chiffresCles",
      title: "Chiffres Clés",
    },
    {
      id: 3,
      href: "#contact",
      title: "Contact",
    },
  ];
  const navBar = useRef();
  function changeOpacityNavBar() {
    const positionHeaderBottom = document.querySelector("#header").scrollHeight;
    const navBarHeight = navBar.current.offsetHeight;
    window.addEventListener("scroll", () => {
      if (window.scrollY > positionHeaderBottom - navBarHeight)
        setScrollUnderHeader(true);
      else setScrollUnderHeader(false);
    });
  }

  useEffect(() => {
    changeOpacityNavBar();
  });
  return (
    <header id="header" className="header">
      <nav className={scrollUnderHeader ? "scrolled" : ""} ref={navBar}>
        <div className="header__leftContainer">
          <img
            src={logo}
            alt="logo-mc-montage"
            title="logo MC Montage"
            className="header__img"
          />
          <ul>
            {links.map((item, index) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => setActiveLink(item.id)}
                className={activeLink === item.id ? "actif" : ""}
              >
                <li>{item.title}</li>
              </a>
            ))}
          </ul>
        </div>
      </nav>
      <Presentation />
    </header>
  );
};

export default Header;
