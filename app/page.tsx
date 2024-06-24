"use client";

import React, { useEffect, useRef } from "react";
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
  const servicesRef = useRef<HTMLDivElement>(null);

  // Initialize AOS library for animations when the component mounts
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


  return (
    <div>
      <ResponsiveNav  />
      <HomePage />
      <HomeIcons />
      <About />

      {/* Services section with a ref to scroll to */}
      <div id="services" ref={servicesRef}>
        <Services />
      </div>

      <Process />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
