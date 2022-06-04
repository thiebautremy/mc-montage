import starFull from "../../assets/images/star-full.png";
import starEmpty from "../../assets/images/star-empty.png";
import { useEffect, useState } from "react";

const Avis = (props) => {
  console.log(props);
  const [starArray, setStarArray] = useState([]);
  useEffect(() => {
    const newElements = [];
    for (let index = 1; index <= 5; index++) {
      index <= props.nbrStar
        ? newElements.push("fill")
        : newElements.push("empty");
      console.log(starArray);
    }
    setStarArray([...starArray, ...newElements]);
    console.log(starArray);
  }, []);
  return (
    <div>
      {" "}
      {starArray?.length > 0 &&
        starArray.map((item) =>
          item === "fill" ? (
            <img src={starFull} alt="Etoile remplie" />
          ) : (
            <img src={starEmpty} alt="Etoile vide" />
          )
        )}
      <span>{props.avis}</span>
    </div>
  );
  // for (let index = 0; index <= 5; index++) {
  //   if (index < nbrStar) {
  //     <img src={starFull} alt="Etoile remplie" />;
  //   } else {
  //     <img src={starEmpty} alt="Etoile vide" />;
  //   }
  // }
};

export default Avis;
