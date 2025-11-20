import React from "react";
import Navbar from "../components/NavBar";
import HeroSection from "../components/HeroSection2";
import WhoWeAre from "../components/WhoWeAre";
import MissionValues from "../components/MissionValues";
import History from "../components/History";
import Team from "../components/Team";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";


const About = () => {
  return (
    <div className="bg-[#def1ef] font-sans text-[#31587C]">
      <Navbar />
      <HeroSection />
      <WhoWeAre />
      <MissionValues />
      <History />
      <Team />
      <CTASection />
      <Footer />
    </div>
  );
};

export default About;
