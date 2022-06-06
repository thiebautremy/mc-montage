/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import "./header.scss";

const Header = () => {
  const liArray = document.querySelectorAll("#header ul a");
  console.log(liArray);

  function handleClickOnLi() {
    liArray.forEach((item, index) =>
      item.addEventListener("click", () => {
        liArray[index].classList("actifLink");
      })
    );
  }

  useEffect(() => {
    handleClickOnLi();
  }, []);
  return (
    <header id="header">
      <nav>
        <ul>
          <a href="#presentation">
            <li>Présentation</li>
          </a>
          <a href="#chiffresCles">
            <li>Chiffres Clés</li>
          </a>
          <a href="#contact">
            <li>Contact</li>
          </a>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
