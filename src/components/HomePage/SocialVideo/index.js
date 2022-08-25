import React from 'react';
import  '../../../css/bootstrap.min.css';
import  '../../../css/style.css';
import Banner1 from '../../../img/banner/banner1.jpg';


const Slider = () => {

    return (

   <section className="p-relative singleBanner">
                <img src={Banner1} className="fullWidth" alt='' />
        <div className="transform-center">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 align-self-center">
                        <div className="right-side-content text-center">
                            <h5 className="textWhite">Around the world.</h5>
                            <h1 className="textWhite fw-600 fs-60">Help Us Make A Diffrence In This World</h1>
                            <p className="textWhite fw-400">Gray eel-catfish longnose whiptail catfish smalleye squaretail queen danio unicorn fish
                                shortnose greeneye fusilier fish silver carp nibbler sharksucker tench lookdown catfishf</p>
                            <a href="#" className="btn-solid with-line btn-big mt-20"><span>Explore<i className="fas fa-caret-right"></i></span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="overlay overlay-bg-dark-2"></div>
    </section>
  
     
);

    };


export default Slider;