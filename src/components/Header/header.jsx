/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useRef } from "react";
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
  function smoothBehavior(itemHref) {
    document.querySelector(itemHref).scrollIntoView({
      behavior: "smooth",
    });
  }
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
    <header id="header">
      <nav className={scrollUnderHeader ? "scrolled" : ""} ref={navBar}>
        <ul>
          {links.map((item, index) => (
            <button
              key={item.id}
              onClick={(e) => {
                setActiveLink(item.id);
                smoothBehavior(item.href);
              }}
              className={activeLink === item.id ? "actif" : ""}
            >
              <li>{item.title}</li>
            </button>
          ))}
        </ul>
      </nav>
      <Presentation />
    </header>
  );
};

export default Header;
