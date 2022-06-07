/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import Presentation from "../Presentation/presentation";

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

  function changeOpacityNavBar() {
    const positionHeaderBottom = document.querySelector("#header").scrollHeight;
    const navBarHeight = document.querySelector("#header nav").clientHeight;
    console.log(navBarHeight);
    console.log(document.querySelector("#header"));
    window.addEventListener("scroll", () => {
      // console.log(window.scrollY);
      if (window.scrollY > positionHeaderBottom - navBarHeight)
        setScrollUnderHeader(true);
      else setScrollUnderHeader(false);
    });
  }

  useEffect(() => {
    changeOpacityNavBar();
  });
  return (
    <header id="header">
      <nav className={scrollUnderHeader ? "scrolled" : ""}>
        <ul>
          {links.map((item, index) => (
            <a
              href={item.href}
              key={item.id}
              onClick={(e) => setActiveLink(item.id)}
              className={activeLink === item.id ? "actif" : ""}
            >
              <li>{item.title}</li>
            </a>
          ))}
        </ul>
      </nav>
      <Presentation />
    </header>
  );
};

export default Header;
