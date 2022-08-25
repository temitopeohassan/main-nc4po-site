import React from 'react';
import  '../../../css/bootstrap.min.css';
import  '../../../css/style.css';

const Countdown = () => {

    return (

   <section className="section-padding advertisement-banner-1 center-bg-effect">
        <div className="container-fluid custom-container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="advertisement-text-1 center-block-div">
                        <h6 className="sub-head">Our Causes</h6>
                        <h3 className="text-white heading">Lets Change The World <span className="text-white">With Humanity</span></h3>
                        <div className="ad-count justify-content-center">
                            <div className="countdownBox">
                                <div className="timeBox"> <span id="mb-days"></span>
                                </div>
                                <div className="timeBox"> <span id="mb-hours"></span>
                                </div>
                                <div className="timeBox"> <span id="mb-minutes"></span>
                                </div>
                                <div className="timeBox"> <span id="mb-seconds"></span>
                                </div>
                            </div>
                        </div>
                        <a href="#" className="btn btn-text btn-text-white mt-20">Become A Volunteer</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  
     
);

    };


export default Countdown;