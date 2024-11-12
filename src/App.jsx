import React from "react";
import './styles.css';
import './section1.css';
import Header from "./components/Header";
import Section1 from "./components/Section1";

const App = () => {
  return (
    <div className="scroll-container">
      <Header />
      <Section1 />
    </div>
  )
};

export default App
