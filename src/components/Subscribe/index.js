import React from 'react';
import style from '../../css/style.css';








const Subscribe = () => {

    return (
<section className="section-padding block_newsletter">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="section-header-left text-center">
                        <h3 className="textLightBlack header-title">Grab Our Newsletter</h3>
                        <p>To receive latest offers and discounts from the shop. </p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="subscribe-wrapper">
                        <form id="subscribe-form" method="post" action="#">
                            <div className="subscribe-content">
                                <input type="text" name="subscribe-input" id="subscribe-input" value="" placeholder="Enter Your Email Address" className="form-control input-text required-entry validate-email" />
                                <button className="button" type="submit"><span>Subscribe</span></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
     
);

    };


export default Subscribe;