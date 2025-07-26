// src/App.tsx
import React from "react";
import {Navbar} from "./components/Navbar/Navbar"
import './index.css'
import {HeroSection} from "./components/HeroSection"
const App: React.FC = () => {
  // sm:px-6 lg:px-8 => keep this in mind, it server the purpose of left and right padding of the entire page
  return (
     <div className="">
      <Navbar />
      <div>
        <HeroSection />
      </div>

    </div>
  );
};

export default App;
