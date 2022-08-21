import React from 'react';
import  '../../css/bootstrap.min.css';
import  '../../css/style.css';
import  thisisimage from '../../img/gallery/thisisimage2.jpg';

const AboutSection = () => {

    return (

  
  <>
  <section className="masonary-gallery-sec">
        <div className="container-fluid no-padding">
            <div className="row magnific-gallery">
                <div className="col-lg-6">
                    <div className="full-height masonary-box p-relative">
                        <div className="masonary-text transform-center">
                            <div className="masonary-text-wrapper">
                                <div className="icon-box">
                                     <img src={thisisimage} alt='' />
                                </div>
                                <div className="text-box">
                                    <h3 className="text-custom-white">
                                        Stay up-todate, Follow us on our Instagram & Twitter page for daily updates
                                    </h3>
                                    <a href="#" className="text-custom-white fs-14"><i className="fab fa-instagram mr-2"></i> @Political</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="video-box full-height">
                        <div className="video_wrapper video_wrapper_full js-videoWrapper">
                            <video src="../../../../../https@www.youtube.com/watch@v=bu_zYkgu6GU" controls="controls" />                                                                                                      
                            <div className="videoPoster js-videoPoster">
                                <img src={thisisimage} alt='' />
                                <div className="video-inner video-btn-wrapper"> <a href="JavaScript:Void(0);"><i className="pe-7s-play"></i></a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row pt-0">
                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <div className="masonary-item p-relative">
                           <a>
                                <img src={thisisimage} alt='' />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-8 col-sm-6">
                        <div className="masonary-item p-relative">
                            <a href="assets/img/gallery/thisisimage4.jpg" className="popup">
                               <img src={thisisimage} alt='' />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <div className="masonary-item p-relative">
                            <a href="assets/img/gallery/thisisimage3.jpg" className="popup">
                                <img src={thisisimage} alt='' />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-8 col-sm-6">
                        <div className="masonary-item p-relative">
                            <a href="assets/img/gallery/thisisimage5.jpg" className="popup">
                                <img src={thisisimage} alt='' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  </>
     
);

    };


export default AboutSection;