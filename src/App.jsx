import React from "react";
import './styles.css';
import './section1.css';
import './section2.css';
import './section3.css';
import './section4.css';
import './section5.css';
import './section6.css';
import './footer.css';
import Header from "./components/Header";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="scroll-container">
        <Header />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
      </div>
      <Footer />
    </>
  )
};

export default App
