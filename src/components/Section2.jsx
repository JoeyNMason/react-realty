import React, {useState} from "react";
import '../styles.css';
import '../section2.css';
import imgOne from '../assets/images/flat1.jpg';
import imgTwo from '../assets/images/flat2.jpg';
import imgThree from '../assets/images/flat3.jpg';
import imgFour from '../assets/images/flat4.jpg';

function Section2() {
    const panels = document.querySelectorAll('.panel');

    panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active');
    });
    });

    return(
        <section className="scroll-page section2" id="page-2">
            <div className="listing-ttl container">
                <h3 className="gradient-txt">Listings</h3>
            </div>

            <div className="listing-container container">
                <div 
                className="panel one active" style={{ backgroundImage: `url(${imgOne})` }}>
                    <h3>Lorem, ipsum dolor.</h3>
                </div>
                <div className="panel two" style={{ backgroundImage: `url(${imgTwo})` }}>
                    <h3>Lorem, ipsum dolor.</h3>
                </div>
                <div className="panel three" style={{ backgroundImage: `url(${imgThree})` }}>
                    <h3>Lorem, ipsum dolor.</h3>
                </div>
                <div className="panel four" style={{ backgroundImage: `url(${imgFour})` }}>
                    <h3>Lorem, ipsum dolor.</h3>
                </div>
            </div>
        </section>
    )
}

export default Section2;