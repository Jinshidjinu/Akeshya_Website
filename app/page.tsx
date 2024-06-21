
import ResponsiveNav from "./Components/Home/Navigation/ResponsiveNav";
import HomePage from "./Components/Home/Hero/Home";
import HomeIcons from "./Components/Home/Hero/HomeIcons";
import About from "./Components/Home/About/About";
import Services from "./Components/Home/Servicess/Services"; // Typo corrected from "Servicess" to "Services"
import Process from "./Components/Home/OurProcess/Process";
import Features from "./Components/Home/CoreFeatures/Features";
import Contact from "./Components/Home/Contact/Contact";
import Footer from "./Components/Home/Footer/Footer";


import AOS from "aos";
import "aos/dist/aos.css";


const Home: React.FC = () => {


  return (
    <div>
     
      <ResponsiveNav />
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
