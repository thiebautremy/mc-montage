import { useState, useEffect } from "react";

const useCounterAnimation = (props) => {
  let [counter, setCounter] = useState(0);
  let delta = Math.ceil((props.duree * 1000) / props.endNumber); // On calcule l'intervalle de temps entre chaque rafraîchissement du compteur (durée mise en milliseconde)

  function countdown() {
    if (counter < props.endNumber) {
      setCounter(counter++);
      setTimeout(countdown, delta);
    }
  }
  useEffect(() => {
    setTimeout(countdown, delta);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter]);

  return counter;
};
export default useCounterAnimation;
