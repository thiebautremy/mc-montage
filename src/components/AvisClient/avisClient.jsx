import "./avisClient.scss";
import Avis from "./avis";
const AvisClient = () => {
  return (
    <section id="avisClient">
      <Avis nbrStar={4} avis={"Excellent travail !"} />
      <Avis nbrStar={5} avis={"Travail très pro, je recommande!"} />
      <Avis nbrStar={0} avis={"Mick lache des caisses tout le temps..."} />
    </section>
  );
};

export default AvisClient;
