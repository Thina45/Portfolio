import React from "react";
import Hero from "./sections/Hero";
import ShowCase from "./sections/ShowCase";
import NavBar from "./components/NavBar";
import FeatureCards from "./sections/FeatureCards";
import EducationSection from "./sections/EducationSection";
import TechStack from "./sections/TechStack";
import Services from "./sections/Services";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowCase />
      <FeatureCards />
      <EducationSection />
      <TechStack />
      <Services />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
