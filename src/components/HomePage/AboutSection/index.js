import React from 'react';
import  '../../../css/bootstrap.min.css';
import  '../../../css/style.css';
import  thisisimage from '../../../img/home-2-into.jpg';
import { Link } from "react-router-dom";

const AboutSection = () => {

    return (

  
  <>
  <section className="about-section-style-1">
        <div className="row no-gutters">
            <div className="col-lg-6">
                <div className="full-height">
                    <img src= {thisisimage} alt="img" className="img-fluid full-width full-height" />
                </div>
            </div>
            <div className="col-lg-6 bg-custom-primary">
                <div className="about-section-container">
                    <div className="section-header-left pb-0">
                        <span className="heading-title text-white">Welcome To Political</span>
                        <h3 className="header-title text-white mb-20">Help Us Identify the Charities You Can Trust.</h3>
                        <p className="text-white">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.
                            He lay on his armour-like back, and if he lifted his head a little he could see his brown belly,
                            slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it.</p>
                        <Link to="/about"  className="btn btn-text btn-text-white mt-20">Read More</Link>
                    </div>

                </div>
            </div>
        </div>
    </section>
  </>
     
);

    };


export default AboutSection;