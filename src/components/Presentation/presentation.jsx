import "./presentation.scss";
import TypeWriterEffect from "react-typewriter-effect";

const Presentation = () => {
  const myRef = document.querySelector("#presentation");
  return (
    <>
      <main className="presentation" id="presentation">
        <div className="presentation__container__title">
          <TypeWriterEffect
            textStyle={{ fontFamily: "Red Hat Display" }}
            startDelay={100}
            cursorColor="red"
            text="MC Montage"
            typeSpeed={200}
            scrollArea={myRef}
          />
          {/* <h1>MC</h1> <h1>Montage</h1> */}
        </div>
        <div className="presentation__container__text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A quibusdam
            nihil dicta iste earum molestias magnam, et perferendis quasi
            voluptatibus, sapiente similique eaque. Eaque recusandae sint vero
            amet, nulla laborum?
          </p>
        </div>
      </main>
      <div className="presentation__clipPath"></div>
    </>
  );
};

export default Presentation;
