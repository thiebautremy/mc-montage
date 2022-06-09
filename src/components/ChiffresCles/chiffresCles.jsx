import { useState, useRef, useEffect } from "react";
import useIntersection from "../../Services/useIntersection";
import "./chiffresCles.scss";
// import useCounterAnimation from "../../Services/counterAnimation";

const ChiffresCles = () => {
  const chiffresClesDOM = useRef();
  const inViewPort = useIntersection(chiffresClesDOM, "0px");
  useEffect(() => {
    ScrollToElement();
  });
  function ScrollToElement() {
    window.addEventListener("scroll", () => {
      if (inViewPort) {
        console.log("in viewport:", chiffresClesDOM.current);
      } else {
        console.log("pas dans viewport");
      }
    });
  }
  return (
    <section id="chiffresCles" className="chiffresCles" ref={chiffresClesDOM}>
      <h2>Chiffres clés</h2>
      <div className="chiffresCles__chiffres">
        <p>
          <span>15</span>Salariés
        </p>
        <p>
          <span>153</span>Chantiers
        </p>
        <p>
          <span>30</span>Entreprises nous ont fait confiance
        </p>
      </div>
    </section>
  );
};

export default ChiffresCles;
