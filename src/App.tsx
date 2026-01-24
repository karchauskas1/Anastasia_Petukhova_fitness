import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingButton from "./components/FloatingButton";
import Hero from "./sections/Hero";
import Facts from "./sections/Facts";
import Directions from "./sections/Directions";
import Services from "./sections/Services";
import Marathon from "./sections/Marathon";
import Schedule from "./sections/Schedule";
import Reviews from "./sections/Reviews";
import Social from "./sections/Social";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Facts />
        <Directions />
        <Services />
        <Marathon />
        <Schedule />
        <Reviews />
        <Social />
      </main>
      <Footer />
      <FloatingButton />
    </div>
  );
}

export default App;
