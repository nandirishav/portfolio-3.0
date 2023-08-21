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
  StarsCanvas,
} from "./components";
import FloatingContact from "./components/FloatingContact";

const App = () => {
  return (
    <BrowserRouter>
      <div className="w-full min-h-screen overflow-x-hidden relative z-0 bg-primary">
        {/* <div> */}
        <Navbar />
        <Hero />
        {/* </div> */}
        <About />
        <Works />
        {/* <div className="relative z-0"> */}
        <Contact />
        {/* <StarsCanvas /> */}
        {/* </div> */}
        <FloatingContact />
      </div>
    </BrowserRouter>
  );
};

export default App;
