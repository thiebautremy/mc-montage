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
      <h2>Avis et recommandation</h2>
      <div id="avisClientList">
        {avis.map((item, index) => (
          <Avis key={item.quote} avis={item} />
        ))}
      </div>
    </section>
  );
};

export default AvisClient;
