import React from 'react';
import  '../../css/bootstrap.min.css';
import  '../../css/style.css';
import { Link } from "react-router-dom";
import Logo from '../../img/logo-1.png';


const Header = () => {

    return (
        <header className="header">
        <div className="container-fluid custom-container">
            <div className="row">
                <div className="col-12">
                    <div className="navigation">
                        <div className="logo">
                            <Link to="/"><img src={Logo} alt='Northern Coalition For Peter Obi' /></Link>
                        </div>
                        <div className="main-navigation">
                            <nav>
                                <ul className="main-menu">
                                    <li className="menu-item menu-item-has-children"> <Link to="/" className="text-light-black">Home</Link></li>
                                    <li className="menu-item"> <Link to="/about" className="text-light-black">About</Link></li>
                                    <li className="menu-item"> <Link to="/candidates" className="text-light-black">Candidates</Link></li>
                                    <li className="menu-item"> <Link to="/donate" className="text-light-black">Donate </Link></li>
                                    <li className="menu-item menu-item-has-children"> <Link to="/participate" className="text-light-black">Participate</Link>
                                        <ul className="sub-menu">
                                            <li className="menu-item"> <Link to="/volunteer">Volunteer</Link>
                                            </li>
                                            <li className="menu-item"> <Link to="/agent">Voting Agent</Link>
                                            </li>
                                            <li className="menu-item"> <Link to="/host">House Center Host</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item menu-item-has-children"> <Link to="/contact" className="text-light-black">Contact</Link></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="right-side-navigation">
                            <ul>
                                <li className="hamburger-menu">
                                    <Link to="#" className="menu-btn"> <span></span>
                                        <span></span>
                                        <span></span>
                                    </Link>
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