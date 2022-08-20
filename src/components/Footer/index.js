import React from 'react';
import  '../../css/bootstrap.min.css';
import  '../../css/style.css';
import Logo from '../../img/logo.png';







const Footer = () => {

    return (
<footer className="section-padding bg-light-theme pt-0 u-line bg-custom-primary">
        
        <div className="container-fluid custom-container">
            <div className="row">
                <div className="col-xl col-lg-4 col-md-4 col-sm-6">
                    <div className="footer-contact">
                        <h6 className="text-custom-white">About Us</h6>
                        <div className="logo mb-xl-20">
                            <a href="#">
                            <img src={Logo} alt='Northern Coalition For Peter Obi' />
                            </a>
                        </div>
                        <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                    </div>
                </div>
                <div className="col-xl col-lg-4 col-md-4 col-sm-6">
                    <div className="footer-links">
                        <h6 className="text-custom-white">Get to Know Us</h6>
                        <ul>
                            <li><a href="about.html" className="text-white fw-500">About Us</a>
                            </li>
                            <li><a href="blog-left.html" className="text-white fw-500">Blog</a>
                            </li>
                            <li><a href="#" className="text-white fw-500">Socialize</a>
                            </li>
                            <li><a href="index.html" className="text-white fw-500">Ecom</a>
                            </li>
                            <li><a href="#" className="text-white fw-500">Perks</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-xl col-lg-4 col-md-4 col-sm-6">
                    <div className="footer-links">
                        <h6 className="text-custom-white">Let Us Help You</h6>
                        <ul>
                            <li><a href="#" className="text-white fw-500">Account Details</a>
                            </li>
                            <li><a href="order-details.html" className="text-white fw-500">Order History</a>
                            </li>
                            <li><a href="#" className="text-white fw-500">Find Product</a>
                            </li>
                            <li><a href="login.html" className="text-white fw-500">Login</a>
                            </li>
                            <li><a href="#" className="text-white fw-500">Track order</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-xl col-lg-4 col-md-4 col-sm-6">
                    <div className="footer-links">
                        <h6 className="text-custom-white">Get to Know Us</h6>
                        <ul>
                            <li><a href="about.html" className="text-white fw-500">About Us</a>
                            </li>
                            <li><a href="blog-details.html" className="text-white fw-500">Blog</a>
                            </li>
                            <li><a href="#" className="text-white fw-500">Socialize</a>
                            </li>
                            <li><a href="index.html" className="text-white fw-500">Ecom</a>
                            </li>
                            <li><a href="#" className="text-white fw-500">Perks</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-xl col-lg-4 col-md-4 col-sm-6">
                    <div className="footer-links">
                        <h6 className="text-custom-white">Contact info</h6>
                        <ul className="contactInfo">
                            <li>
                                <a href="#" className="text-white"> <span><i className="pe-7s-timer"></i></span>
                                    Monday - Friday: 9:00 AM - 06:00 PM</a>
                            </li>
                            <li>
                                <a href="#" className="text-white"> <span><i className="pe-7s-mail"></i></span>
                                    info@nocforpeterobi.ng</a>
                            </li>
                            <li>
                                <a href="#" className="text-white"> <span><i className="pe-7s-call"></i></span>
                                    (+000) 123 456 7890</a>
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