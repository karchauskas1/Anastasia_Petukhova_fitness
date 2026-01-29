import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingButton from "./components/FloatingButton";
import Hero from "./sections/Hero";
import Facts from "./sections/Facts";
import Certificates from "./sections/Certificates";
import Directions from "./sections/Directions";
import Services from "./sections/Services";
import Cancellation from "./sections/Cancellation";
import Marathon from "./sections/Marathon";
import Schedule from "./sections/Schedule";
import Reviews from "./sections/Reviews";
import Social from "./sections/Social";
import FreeWorkout from "./sections/FreeWorkout";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Facts />
        <Certificates />
        <Directions />
        <Services />
        <Cancellation />
        <Marathon />
        <Schedule />
        <FreeWorkout />
        <Reviews />
        <Social />
      </main>
      <Footer />
      <FloatingButton />
    </div>
  );
}

export default App;
