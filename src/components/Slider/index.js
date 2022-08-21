import React from 'react';
import  '../../css/bootstrap.min.css';
import  '../../css/style.css';
import { Link } from "react-router-dom";
import Banner1 from '../../img/banner/banner1.jpg';


const Slider = () => {

    return (

   <section className="p-relative single-banner">
                <img src={Banner1} className="fullWidth" alt='' />
        <div className="transform-center">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 align-self-center">
                        <div className="right-side-content text-center">
                              <h1 className="text-white fw-600 fs-60">Northern Coalition For Peter Obi</h1>
                            
                            <Link to="/about" className="btn-solid with-line btn-big mt-20"><span>Read More<i className="fas fa-caret-right"></i></span></Link>
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