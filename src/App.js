import React from "react";
import "./App.css"
import Home from "./components/Home/Home.js";
import About from "./components/About/About.js";
import Image from "./components/Image/Image.js";
import Service from "./components/Service/Service.js";
import Portfolio from "./components/Portfolio/Portfolio.js";
import Testimonials from "./components/Testimonials/Testimonials.js";
import Twiter from "./components/Twiter/Twiter.js";
import Contact from "./components/Contact/Contact.js"
import './components/project1.css';

const App = () => {
  return (
    <div style={{width: "100vw"}}>
      <Home />
      <About/>
      <Image/>
      <Service/>
      <Portfolio/>
      <Testimonials/>
      <Twiter/>
      <Contact/>
    </div>
  );
};

export default App;
