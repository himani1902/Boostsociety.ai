import React, { useEffect } from "react";
import "./Home.css";
import GuestLayout from "../layouts/guestLayout";
import Partners from "./Partners";
import CollaborativeProjects from "./CollaborativeProjects";
import HeroSection from "./HeroSection"; // Ensure this path is correct
 // Ensure this path is correct
import Features from "./Features";  
import Work from "./Work";  
import Testimonials from "./Testimonials";   
// import { DarkModeProvider } from "../context/DarkModeContext"; 
const Home = () => {
  useEffect(() => {
    const handleWheel = (event) => {
      event.preventDefault();
      window.scrollBy({
        top: event.deltaY > 0 ? window.innerHeight / 2 : -window.innerHeight / 2, // Slower scrolling
        behavior: "smooth",
      });
    };
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <GuestLayout>
      {/* <DarkModeProvider/> */}
           <HeroSection/>
        <Partners/>
        <CollaborativeProjects/>
        <Features/>
       <Work/>
       <Testimonials/>
    </GuestLayout>
  );
};

export default Home;
