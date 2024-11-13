import React from "react";
import '../section3.css';
import photoStepsImg from '../assets/images/Photo on steps.jpg';

function Section3(){
    return(
        <section className="scroll-page section3" id="page-3">
        <div className="listing-ttl container">
            <h3 className="gradient-txt">About Us</h3>
        </div>

        <div className="bento-grid-about">
            <div className="col-left-about">
                <p className="about-txt">Here at CP-Realty Ltd we aim to focus on you and your property needs.
                    Our attention to what would make a comfortable short to mid-stay at one of our properties and our quick response to your enquiries is what will help you decide to book with us.
                    So, whether you are a nature lover or enjoy cultural outings, on a buisness trip, a relocator or just visiting relatives, come and book a stay with us. Leeds and surroundings is a beautiful place to work & explore - the city centre with its many varied shops and indoor shopping malls and the Yorkshire Dales and rugged coastline nearby is a must see, and paired with a stay at our property to help you unwind and feel at home after a busy day.
                </p>
            </div>

            <div className="col-left-about">
                <div className="box-about">
                    <img src={photoStepsImg} alt="photo on steps"/>
                </div>
            </div>

        </div>

    </section>
    )
}

export default Section3;