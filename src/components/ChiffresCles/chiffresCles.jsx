import { useState, useRef, useEffect } from "react";
import useIntersection from "../../Services/useIntersection";
import "./chiffresCles.scss";
// import useCounterAnimation from "../../Services/counterAnimation";

const ChiffresCles = () => {
  const chiffresClesDOM = useRef();
  const inViewPort = useIntersection(chiffresClesDOM, "0px");
  const [isInViewPort, setIsInViewPort] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      inViewPort ? setIsInViewPort(true) : setIsInViewPort(false);
    });
  });
  return (
    <section
      id="chiffresCles"
      className={
        isInViewPort
          ? "chiffresCles inViewPortOpacity"
          : "chiffresCles notInViewPortOpacity"
      }
      ref={chiffresClesDOM}
    >
      <h2>Chiffres clés</h2>
      <div className="chiffresCles__chiffres">
        <p>
          <span>4</span>Salariés
        </p>
        <p>
          <span>1530</span>Chantiers
        </p>
        <p>
          <span>plus de 30</span>Entreprises nous ont fait confiance
        </p>
      </div>
    </section>
  );
};

export default ChiffresCles;
