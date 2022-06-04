/* eslint-disable react-hooks/exhaustive-deps */
import starFull from "../../assets/images/star-full.png";
import starEmpty from "../../assets/images/star-empty.png";
import { useEffect, useState } from "react";

const Avis = (props) => {
  const [starArray, setStarArray] = useState([]);
  useEffect(() => {
    const newElements = [];
    for (let index = 1; index <= 5; index++) {
      index <= props.avis.nbrStar
        ? newElements.push("fill")
        : newElements.push("empty");
    }
    setStarArray([...starArray, ...newElements]);
  }, []);
  return (
    <div id="avis">
      {" "}
      {starArray?.length > 0 &&
        starArray.map((item, index) =>
          item === "fill" ? (
            <img src={starFull} alt="Etoile remplie" key={index} />
          ) : (
            <img src={starEmpty} alt="Etoile vide" key={index} />
          )
        )}
      <p className="avis__text">{`"${props.avis.quote}"`}</p>
      <p className="avis__from">{`"${props.avis.from}"`}</p>
    </div>
  );
};

export default Avis;
