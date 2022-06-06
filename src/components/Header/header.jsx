/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";

import "./header.scss";

const Header = () => {
  const [activeLink, setActiveLink] = useState(0);
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

  return (
    <header id="header">
      <nav>
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
    </header>
  );
};

export default Header;
