import React from "react";
import './styles.css';
import './section1.css';
import './section2.css';
import './section3.css';
import './section4.css';
import Header from "./components/Header";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";

const App = () => {
  return (
    <div className="scroll-container">
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  )
};

export default App
