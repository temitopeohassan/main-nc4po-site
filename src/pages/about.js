import React from 'react';
import  '../css/bootstrap.min.css';
import  '../css/style.css';
import  aboutimg from '../img/about1.jpg';
import Subscribe from '../components/Subscribe';
import { Link } from "react-router-dom";



const About = () => {

    return (

        <>
     
        

        
    <div className="main-sec"></div>

    <div className="breadcrumb-area">
        <div className="overlay overlay-bg"></div>
        <div className="container">
            <div className="breadcrumb-content">
                <h2>About Us</h2>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li className="active">About us</li>
                </ul>
            </div>
        </div>
    </div>
 
    <section className="aboutus section-padding">
            <div className="container-fluid custom-container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-xl-9">
                        <div className="history-title mb-lg-40">
                            <h2 className="text-light-black">See what we do for the poor people and <span className="text-color-primary">the children</span></h2>
                            <p className="text-light-white mb-xl-40 fw-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                <br />Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus
                                vel facilisis.</p>
                                <h4 className="text-light-black">How can we help the community?</h4>
                            <div className="row justify-content-between">
                                <div className="col-4">
  
                                    <div className="row full-height">
                                        <div className="col-12 full-height">
                                            <div className="img-box mb-sm-40">
                                                <img src={aboutimg} className="image-fit" alt="img" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-8">
                                    <div className="about-box ">
                                        <p className="text-light-white custom-lh mb-xl-20">
                                            Lorem Ipsum. Proin gravida nibh vel velit amet auctor aliquet. Aenean sollicitudin, lorem quis bibendum nisi elit consequat ipsum, nec ipsu sagittis sebh id elit. Duis sed odio sit amet nibh vulputatrsus a sit amet mauris morbi ipsum.
                                        </p>
                                        <ul>
                                            <li className="fs-14 text-light-white">
                                                <i className="fas fa-check"></i>A Fair Tax System
                                            </li>
                                            <li className="fs-14 text-light-white">
                                                <i className="fas fa-check"></i>Climate Change
                                            </li>
                                            <li className="fs-14 text-light-white">
                                                <i className="fas fa-check"></i>Health Consultation
                                            </li>
                                            <li className="fs-14 text-light-white">
                                                <i className="fas fa-check"></i>Gun Violence Prevention
                                            </li>
                                        </ul>
                                        <p className="text-light-black fw-600 mb-1">J. D 2020</p>
                                        <img src="../img/about1.png" className="mb-xl-20" alt="img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>

    <section className="section-padding how-it-works bg-theme-primary">
        <div className="container">
            <div className="section-header-style-2">
                <h6 className="text-light-green sub-title">Our Process</h6>
                <h3 className="text-light-black header-title">How Does It Work</h3>
            </div>
            <div className="row">
                <div className="col-lg-3 col-sm-6">
                    <div className="how-it-works-box arrow-1">
                        <div className="how-it-works-box-inner"> <span className="icon-box">
                                <img src="../img/how1.png" alt="icon" />
                                <span className="number-box">01</span>
                            </span>
                            <h6>Search</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="how-it-works-box arrow-2">
                        <div className="how-it-works-box-inner"> <span className="icon-box">
                                <img src="../img/how2.png" alt="icon" />
                                <span className="number-box">02</span>
                            </span>
                            <h6>Select</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="how-it-works-box arrow-1">
                        <div className="how-it-works-box-inner"> <span className="icon-box">
                                <img src="../img/how3.png" alt="icon" />
                                <span className="number-box">03</span>
                            </span>
                            <h6>Vote</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="how-it-works-box">
                        <div className="how-it-works-box-inner"> <span className="icon-box">
                                <img src="../img/how4.png" alt="icon" />
                                <span className="number-box">04</span>
                            </span>
                            <h6>Change</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  
    <section className="feedback-area-two section-padding bg-custom-primary">
        <div className="container-fluid custom-container">
            <div className="row">
                <div className="col-12">
                    <div className="section-header-left text-center">
                        <h3 className="text-white header-title">What The Community Say</h3>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="feedback-slider p-relative swiper-container">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="feedback-item-two">
                                    <img src="../img/testimonial/testimonial1.jpg" alt="Feedback" />
                                    <p className="text-white fs-16">I like Political and as compared to other company it's polices and customers support is very good easy to reach., also many time they unable to delivered. Quis ipsum suspendisse ultrices gravida. Risus commodo
                                        viverra
                                        maecenas accumsan lacus vel facilisist amet, sed do eiusm.</p>
                                    <h5 className="text-white fw-600 no-margin">Janadhon doe</h5>
                                    <span className="text-white fw-400">President</span>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="feedback-item-two">
                                    <img src="../img/testimonial/testimonial2.jpg" alt="Feedback" />
                                    <p className="text-white fs-16">I like Political and as compared to other company it's polices and customers support is very good easy to reach., also many time they unable to delivered. Quis ipsum suspendisse ultrices gravida. Risus commodo
                                        viverra
                                        maecenas accumsan lacus vel facilisist amet, sed do eiusm.</p>
                                    <h5 className="text-white fw-600 no-margin">Anna Wright</h5>
                                    <span className="text-white fw-400">Co-founder</span>
                                </div>
                            </div>
                        </div>

                        <div className="swiper-button-next"></div>
                        <div className="swiper-button-prev"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    
<Subscribe/>

       
        </>

     );

    };




export default About;