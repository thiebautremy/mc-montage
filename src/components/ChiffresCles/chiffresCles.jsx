import "./chiffresCles.scss";
import useCounterAnimation from "../../Services/counterAnimation";

const ChiffresCles = () => {
  const data = useCounterAnimation(100, 1);
  console.log(data);
  return (
    <section id="chiffresCles">
      <p>Chiffres cles</p>
    </section>
  );
};

export default ChiffresCles;
