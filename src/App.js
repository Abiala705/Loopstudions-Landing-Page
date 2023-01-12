import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./components/Hero";
import Interactive from "./components/Interactive";
import Creations from "./components/Creations";
import CreationsDesktop from "./components/CreationsDesktop";
import Footer from "./components/Footer";
import FooterDesktop from "./components/FooterDesktop";

const App = () => {
  console.log("App running");
  return (
    <div>
      <Hero />
      <Interactive />
      <Creations />
      <CreationsDesktop />
      <Footer />
      <FooterDesktop />
    </div>
  );
};

export default App;
