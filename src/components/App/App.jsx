import Header from "../Header/header";
import ChiffresCles from "../ChiffresCles/chiffresCles";
import Contact from "../Contact/contact";
import Footer from "../Footer/footer";
import AvisClient from "../AvisClient/avisClient";
import "./App.scss";
import Description from "../Description/description";

function App() {
  return (
    <div className="App" id="App">
      <Header />
      <Description />
      <ChiffresCles />
      <AvisClient />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
