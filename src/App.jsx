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

        {/* HERO SECTION (NO STARS) */}
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>

        {/* ⭐ STARS START HERE (BEHIND ABOUT → CONTACT) */}
        <div className="relative z-0">
          <StarsCanvas />

          <div className="relative z-10">
            <About />
            <Experience />
            <Tech />
            <Works />
            {/* <Feedbacks /> */}
            <Contact />
          </div>
        </div>

      </div>
    </BrowserRouter>
  );
};

export default App;
