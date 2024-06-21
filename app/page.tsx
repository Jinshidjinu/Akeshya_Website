import Image from "next/image";
import ResponsiveNav from "./Components/Home/Navigation/ResponsiveNav";
import HomePage from "./Components/Home/Hero/Home";
import HomeIcons from "./Components/Home/Hero/HomeIcons";
import About from "./Components/Home/About/About";
import Services from "./Components/Home/Servicess/Services";
import Process from "./Components/Home/OurProcess/Process";
import Features from "./Components/Home/CoreFeatures/Features";
 const Home = ()=>{
  return (
   <div>
       <ResponsiveNav/>
       <HomePage/>
       <HomeIcons/>
       <About/>
       <Services/>
       <Process/>
       <Features/>
   
   </div>
  );
}
export default Home