import Header from "../Header/header";
import Presentation from "../Presentation/presentation";
import ChiffresCles from "../ChiffresCles/chiffresCles";
import Contact from "../Contact/contact";
import Footer from "../Footer/footer";
import Diaporama from "../Diaporama/diaporama";
import AvisClient from "../AvisClient/avisClient";
import "./App.scss";

function App() {
  return (
    <div className="App" id="App">
      <Header />
      <Presentation />
      <Diaporama />
      <ChiffresCles />
      <AvisClient />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
