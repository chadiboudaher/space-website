import React from "react";
import bgVideo from "./assets/earth.mp4";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Banner2 from "./components/Banner/Banner2";
import Footer from "./components/Footer/Footer";
const App = () => {
  return (
    <div>
      <div className="h-[700px] relative">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 h-full w-full object-cover -z-10"
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
        <Navbar />
        <Hero />
      </div>

      {/* Services Card Section */}
      <Services />
      <Banner />
      <Banner2 />
      <Footer />
    </div>
  );
};

export default App;
