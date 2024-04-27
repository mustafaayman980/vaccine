import { Link } from "react-router-dom";
import "./App.css";

import Header from "./components/1-Header/Header";
import Hero from "./components/2-Hero/Hero";
import About from "./components/3-About/About";
import Works from "./components/4-Works/Works";
import { useState, useEffect } from "react";
import Footer from "./components/5-Footer/Footer";

function App() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, []);

  return (
    <div id="up">
      <Header />
      <Hero />
      <About />
      <Works />
      <Footer />
      <a style={{ opacity: scroll ? 1 : 0, transition: "1s" }} href="#up">
        <button className="scroll2up ">up</button>
      </a>
      
    </div>
  );
}

export default App;
