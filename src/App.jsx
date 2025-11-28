import { BrowserRouter } from "react-router-dom";
import { 
  About, 
  Contact, 
  Experience, 
  Feedbacks, 
  Hero, 
  Navbar, 
  Tech, 
  Works, 
  StarsCanvas 
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">

        {/* 🌌 Stars for all sections EXCEPT Hero */}
        <div className="fixed inset-0 z-0 pointer-events-none hidden md:block">
          <StarsCanvas />
        </div>

        {/* HERO (no stars here) */}
        <div className="relative z-10 bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>

        {/* OTHER SECTIONS (stars visible behind these) */}
        <div className="relative z-[1]">
          <About />
          <Experience />
          <Tech />
          <Works />
          <Contact />
        </div>

      </div>
    </BrowserRouter>
  );
};

export default App;
