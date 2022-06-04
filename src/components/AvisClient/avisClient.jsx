import "./avisClient.scss";
import Avis from "./avis";
const AvisClient = () => {
  const avis = [
    {
      nbrStar: 4,
      quote: "Excellent travail !",
      from: "Darty",
    },
    {
      nbrStar: 5,
      quote: "Travail très pro, je recommande !",
      from: "Ikea",
    },
    {
      nbrStar: 0,
      quote: "Mick lache des caisses tout le temps...",
      from: "IRA",
    },
  ];
  return (
    <section id="avisClient">
      {avis.map((item, index) => (
        <Avis key={item.quote} avis={item} />
      ))}
      {/* <Avis nbrStar={5} avis={"Travail très pro, je recommande!"} />
      <Avis nbrStar={0} avis={"Mick lache des caisses tout le temps..."} /> */}
    </section>
  );
};

export default AvisClient;
