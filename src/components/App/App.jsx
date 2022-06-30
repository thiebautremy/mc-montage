import Header from "../Header/header";
import ChiffresCles from "../ChiffresCles/chiffresCles";
import Contact from "../Contact/contact";
import Footer from "../Footer/footer";
// import AvisClient from "../AvisClient/avisClient";
import "./App.scss";
import ServicesEtRealisations from "../ServicesEtRealisations/servicesEtRealisations";

function App() {
  return (
    <div className="App" id="App">
      <Header />
      <main>
        <ServicesEtRealisations />
        <ChiffresCles />
        {/* <AvisClient /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
