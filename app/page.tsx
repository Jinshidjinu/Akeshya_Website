import Image from "next/image";
import ResponsiveNav from "./Components/Home/Navigation/ResponsiveNav";
import HomePage from "./Components/Home/Hero/Home";
import HomeIcons from "./Components/Home/Hero/HomeIcons";
 const Home = ()=>{
  return (
   <div>
       <ResponsiveNav/>
       <HomePage/>
       <HomeIcons/>
   </div>
  );
}
export default Home