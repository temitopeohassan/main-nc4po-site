import React from 'react';
import  '../../css/bootstrap.min.css';
import  '../../css/style.css';
import Help from '../../img/help.svg';
import Money from '../../img/money.svg';
import Investor from '../../img/investor.svg';
import Cash from '../../img/cash.svg';






const ParticipateSection = () => {

    return (

    
 <section className="service-type">
        <div className="row">
            <div className="col-lg-3 col-md-6 bg-custom-1 border-custom-right border-sm-bottom">
                <div className="service-box">
                    <div className="service-box-wrapper">
                        <div className="service-icon-box">
                            <img src={Help} alt='' />
                        </div>
                        <div className="service-text-box">
                            <p>Participate</p>
                            <h6>As a Volunteers</h6>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-3 col-md-6 bg-custom-2 border-custom-right border-sm-bottom">
                <div className="service-box">
                    <div className="service-box-wrapper">
                        <div className="service-icon-box">
                            <img src={Money} alt='' />
                        </div>
                        <div className="service-text-box">
                            <p>Be a Hand</p>
                            <h6>As a Donor</h6>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-3 col-md-6 bg-custom-3 border-custom-right border-sm-bottom">
                <div className="service-box">
                    <div className="service-box-wrapper">
                        <div className="service-icon-box">
                            <img src={Investor} alt='' />
                        </div>
                        <div className="service-text-box">
                            <p>Participate</p>
                            <h6>As a Voting Agent</h6>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-3 col-md-6 bg-custom-4">
                <div className="service-box">
                    <div className="service-box-wrapper">
                        <div className="service-icon-box">
                         <img src={Cash} alt='' />
                        </div>
                        <div className="service-text-box">
                            <p>Be a Part</p>
                            <h6>Host A House Center</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
     
);

    };


export default ParticipateSection;