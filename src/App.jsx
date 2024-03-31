import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact.jsx";
import  Footer from "./components/Footer/Footer.jsx";
import Services from "./components/Services/Services.jsx";
import Resume from "./components/Resume/Resume.jsx";

function App() {

  return (
    <>
      <Navbar/>
      <Banner/>
      <About/>
      <Resume/>
      <Services/>
      <Skills/>
      <Work/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default App
