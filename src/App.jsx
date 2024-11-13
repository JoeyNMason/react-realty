import React from "react";
import './styles.css';
import './section1.css';
import './section2.css';
import Header from "./components/Header";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";

const App = () => {
  return (
    <div className="scroll-container">
      <Header />
      <Section1 />
      <Section2 />
    </div>
  )
};

export default App
