"use client";

import React, { useEffect } from "react";
import ResponsiveNav from "./Components/Home/Navigation/ResponsiveNav";
import HomePage from "./Components/Home/Hero/Home";
import HomeIcons from "./Components/Home/Hero/HomeIcons";
import About from "./Components/Home/About/About";
import Services from "./Components/Home/Servicess/Services";
import Process from "./Components/Home/OurProcess/Process";
import Features from "./Components/Home/CoreFeatures/Features";
import Contact from "./Components/Home/Contact/Contact";
import Footer from "./Components/Home/Footer/Footer";

import AOS from "aos";
import "aos/dist/aos.css";

const Home: React.FC = () => {
  useEffect(() => {
    AOS.init({
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
      offset: 120,
      delay: 0,
      duration: 1200,
      easing: "linear",
      once: true,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  }, []);

  const openNav = () => {
    console.log("Nav opened");
  };

  const closeNav = () => {
    console.log("Nav closed");
  };

  return (
    <div>
      <ResponsiveNav openNav={openNav} closeNav={closeNav} />
      <HomePage />
      <HomeIcons />
      <About />
      <Services />
      <Process />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
