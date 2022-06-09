import "./chiffresCles.scss";
// import useCounterAnimation from "../../Services/counterAnimation";

const ChiffresCles = () => {
  // const data = useCounterAnimation(100, 1);
  return (
    <section id="chiffresCles" className="chiffresCles">
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
