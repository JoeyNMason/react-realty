import React from "react";
import '../section1.css';
import armchairImg from '../assets/images/armchair.jpg';
import sofaImg from '../assets/images/sofa1.jpg';
import photoStepsImg from '../assets/images/Photo on steps.jpg';

function Section1(){
    return (
        <section className="scroll-page section" id="page-1">
            <div className="info-box">
            <h1><span class="gradient-txt">CP-Realty LTD</span></h1>
            <h3><span class="gradient-txt">Our quest is to fufill your request.</span></h3>
            </div>

            <div class="bento-grid">
                    <div class="col-left">
                        <div class="box">
                            <div class="inner-box">
                                <img src={armchairImg} alt="armchair"/>
                            </div>
                        </div>
        
        
                        <div class="box">
                            <div class="inner-box">
                                <img src={sofaImg} alt="sofa"/>
                            </div>
                        </div>
        
                    </div>
        
                    <div class="col-right">
                        <div class="box">
                            <img src={photoStepsImg} alt="photo on steps"/>
                        </div>
                    </div>
                </div>
        </section>
    )
}

export default Section1;