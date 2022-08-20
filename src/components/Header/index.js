import React from 'react';
import  '../../css/bootstrap.min.css';
import  '../../css/style.css';
import Logo from '../../img/logo-1.png';


const Header = () => {

    return (
        <header className="header">
        <div className="container-fluid custom-container">
            <div className="row">
                <div className="col-12">
                    <div className="navigation">
                        <div className="logo">
                            <a href="/"><img src={Logo} alt='Northern Coalition For Peter Obi' /></a>
                        </div>
                        <div className="main-navigation">
                            <nav>
                                <ul className="main-menu">
                                    <li className="menu-item menu-item-has-children"> <a href="/" className="text-light-black">Home</a></li>
                                    <li className="menu-item"> <a href="/about" className="text-light-black">About</a></li>
                                    <li className="menu-item"> <a href="/candidates" className="text-light-black">Candidates</a></li>
                                    <li className="menu-item"> <a href="/donate" className="text-light-black">Donate </a></li>
                                    <li className="menu-item menu-item-has-children"> <a href="#" className="text-light-black">Participate</a>
                                        <ul className="sub-menu">
                                            <li className="menu-item"> <a href="#">Volunteer</a>
                                            </li>
                                            <li className="menu-item"> <a href="#">Voting Agent</a>
                                            </li>
                                            <li className="menu-item"> <a href="#">House Center Host</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item"> <a href="#" className="text-light-black">Shop </a></li>
                                    <li className="menu-item menu-item-has-children"> <a href="/contact" className="text-light-black">Contact</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="right-side-navigation">
                            <ul>
                                <li className="hamburger-menu">
                                    <a href="#" className="menu-btn"> <span></span>
                                        <span></span>
                                        <span></span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
);

    };


export default Header;