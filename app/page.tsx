import Image from "next/image";
import ResponsiveNav from "./Components/Home/Navigation/ResponsiveNav";
import HomePage from "./Components/Home/Hero/Home";
import HomeIcons from "./Components/Home/Hero/HomeIcons";
import About from "./Components/Home/About/About";
import Services from "./Components/Home/Servicess/Services";
import Process from "./Components/Home/OurProcess/Process";
 const Home = ()=>{
  return (
   <div>
       <ResponsiveNav/>
       <HomePage/>
       <HomeIcons/>
       <About/>
       <Services/>
       <Process/>
   
   </div>
  );
}
export default Home