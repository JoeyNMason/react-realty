import React from "react";
import '../section4.css';

function Section4(){

    return(
        <section class="scroll-page section4" id="page-4">

        <div class="listing-ttl container">
            <h3 class="gradient-txt">Services</h3>
        </div>


        <div className="service-text-container">
            <div className="card0 text-card">
                {/* <!-- 100 letters including spacing, text needs to wrap after 101 --> */}
                <p> 
                    At CP-REALTY LTD we pride ourselves in giving you value by attending to your property needs for short-term rental stays. 
                    <br />
                    We also assist with your investment property search for residential and commercial properties. 
                    <br />
                    Our bespoke assistance is there to help make your property dream come true!
                </p>
            </div>
        </div>
        
        <div className="service-text-container">
            <div className="card0 text-card">
                {/* <!-- 100 letters including spacing, text needs to wrap after 101 --> */}
                <p> 
                    We provide professional services to property owners and investors alike as a property operator and tailored care for your property investment needs. Our area is in London & Leeds.
                    <br /> 
                    Additionally, CP-REALTY LTD can assist you with a personal touch in your property staging needs.
                </p> 
            </div>
        </div>
        
        <div className="grid-container">
            <div className="card card1">
                <p> 
                    Photographer
                </p>
            </div>
        
            <div className="card card2">
                <p> 
                    Videographer
                </p>
            </div>
        
            <div className="card card3">
                <p> 
                    Cleaning Services
                </p>
            </div>
        
            <div className="card card4">
                <p> 
                    Builder
                </p>
            </div>
        
            <div className="card card5">
                <p> 
                    Our quest is to fulfil your request
                </p>
            </div> {/* <!-- Center card --> */}
        
            <div className="card card6">
                <p> 
                    Web Designer
                </p>
            </div>
        
            <div className="card card7">
                <p> 
                    Tailored Care
                </p>
            </div>
        
            <div className="card card8">
                <p> 
                    Serviced Accomodation
                </p>
            </div>
        
            <div className="card card9">
                <p>
                    Hassle Free
                </p>
            </div>
        </div>

    </section>
    )
}

export default Section4;