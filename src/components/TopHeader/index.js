import React from 'react';
import  '../../css/bootstrap.min.css';
import  '../../css/style.css';








const TopHeader = () => {

    return (


  <div className="top-header">
        <div className="container-fluid custom-container">
            <div className="row">
                <div className="col-md-6">
                    <div className="top-left">
                        <ul className="top-info">
                            <li><a href="#"><i className="fas fa-phone-alt"></i> +000 123 45678</a></li>
                            <li><a href="#"><i className="fas fa-envelope"></i> info@nocforpeterobi.ng</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="top-right">
                        <ul className="list-inline">
                            <li className="list-inline-item"><a href="#"><i className="fab fa-facebook-square"></i></a> </li>
                            <li className="list-inline-item"><a href="#"><i className="fab fa-twitter-square"></i></a> </li>
                            <li className="list-inline-item"><a href="#"><i className="fab fa-instagram"></i></a> </li>
                            <li className="list-inline-item"><a href="#"><i className="fab fa-linkedin"></i></a> </li>
                            <li className="list-inline-item"><a href="#"><i className="fab fa-youtube"></i></a> </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
     
);

    };


export default TopHeader;