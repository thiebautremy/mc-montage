import Header from "../Header/header";
import Presentation from "../Presentation/presentation";
import ChiffresCles from "../ChiffresCles/chiffresCles";
import Contact from "../Contact/contact";
import Footer from "../Footer/footer";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Presentation />
      <ChiffresCles />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
