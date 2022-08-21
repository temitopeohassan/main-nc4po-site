import React from 'react';
import  '../../css/bootstrap.min.css';
import  '../../css/style.css';
import Logo from '../../img/logo.png';
import { Link } from "react-router-dom";







const Footer = () => {

    return (
<footer className="section-padding bg-light-theme pt-0 u-line bg-custom-primary">
        
        <div className="container-fluid custom-container">
            <div className="row">
                <div className="col-xl col-lg-4 col-md-4 col-sm-6">
                    <div className="footer-contact">
                        <h6 className="text-custom-white">About Us</h6>
                        <div className="logo mb-xl-20">
                            <Link to="#">
                            <img src={Logo} alt='Northern Coalition For Peter Obi' />
                            </Link>
                        </div>
                        <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                    </div>
                </div>
                <div className="col-xl col-lg-4 col-md-4 col-sm-6">
                    <div className="footer-links">
                        <h6 className="text-custom-white">Get to Know Us</h6>
                        <ul>
                            <li><Link to="/about" className="text-white fw-500">About Us</Link>
                            </li>
                            <li><Link to="/#" className="text-white fw-500">BManagement Team</Link>
                            </li>
                            <li><Link to="/#" className="text-white fw-500">Support Groups</Link>
                            </li>
                            <li><Link to="/#" className="text-white fw-500">Donate</Link>
                            </li>
                            <li><Link to="/#" className="text-white fw-500">Participate</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-xl col-lg-4 col-md-4 col-sm-6">
                    <div className="footer-links">
                        <h6 className="text-custom-white">Candidates</h6>
                        <ul>
                            <li><Link to="/#" className="text-white fw-500">Candidates</Link>
                            </li>
                            <li><Link to="/#" className="text-white fw-500">State Governors</Link>
                            </li>
                            <li><Link to="/#" className="text-white fw-500">Senatprs</Link>
                            </li>
                            <li><Link to="/#" className="text-white fw-500">House Of Representatives</Link>
                            </li>
                            <li><Link to="/#" className="text-white fw-500">State House Of Assembly</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-xl col-lg-4 col-md-4 col-sm-6">
                    <div className="footer-links">
                        <h6 className="text-custom-white">Get to Know Us</h6>
                        <ul>
                            <li><Link to="/about" className="text-white fw-500">About Us</Link>
                            </li>
                            <li><Link to="/#" className="text-white fw-500">Blog</Link>
                            </li>
                            <li><Link to="#" className="text-white fw-500">Socialize</Link>
                            </li>
                            <li><Link to="index.html" className="text-white fw-500">Ecom</Link>
                            </li>
                            <li><Link to="#" className="text-white fw-500">Perks</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-xl col-lg-4 col-md-4 col-sm-6">
                    <div className="footer-links">
                        <h6 className="text-custom-white">Contact info</h6>
                        <ul className="contactInfo">
                            <li>
                                <Link to="#" className="text-white"> <span><i className="pe-7s-timer"></i></span>
                                    Monday - Friday: 9:00 AM - 06:00 PM</Link>
                            </li>
                            <li>
                                <Link to="#" className="text-white"> <span><i className="pe-7s-mail"></i></span>
                                    info@nocforpeterobi.ng</Link>
                            </li>
                            <li>
                                <Link to="#" className="text-white"> <span><i className="pe-7s-call"></i></span>
                                    (+000) 123 456 7890</Link>
                            </li>
                        
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>

     
);

    };


export default Footer;