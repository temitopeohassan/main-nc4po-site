import React from 'react';
import '../../css/style.css';
import '../../css/bootstrap.min.css';
import '../../css/swiper.min.css';
import Can1 from '../../img/categories/category1.png';
import Can2 from '../../img/categories/category2.png';
import Can3 from '../../img/categories/category3.png';
import { Link } from "react-router-dom";







const CandidateList = () => {

    return (

  <>
<section className="browse-cat bg-theme-primary section-padding">
        <div className="container-fluid custom-container">
            <div className="row">
                <div className="col-12">
                    <div className="section-header-left title">
                        <h3 className="text-light-black header-title">Our Candidates List </h3>
                        <span className="fs-16 align-self-center"><Link to="#">See All</Link></span>
                    </div>
                </div>
                <div className="col-12">
                    <div className="category-slider swiper-container">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <Link to="#" className="categories">
                                    <div className="icon text-custom-white bg-light-green ">
                                        <img src={Can1} alt='' />
                                    </div> <span className="text-light-black cat-name">YZ</span>
                                </Link>
                            </div>
                            <div className="swiper-slide">
                                <Link to="#" className="categories">
                                    <div className="icon text-custom-white bg-light-green ">
                                        <img src={Can2} alt='' />
                                    </div> <span className="text-light-black cat-name">WX</span>
                                </Link>
                            </div>
                            <div className="swiper-slide">
                                <Link to="#" className="categories">
                                    <div className="icon text-custom-white bg-light-green ">
                                        <img src={Can3} alt='' />
                                    </div> <span className="text-light-black cat-name">UV</span>
                                </Link>
                            </div>
                            <div className="swiper-slide">
                                <Link to="#" className="categories">
                                    <div className="icon text-custom-white bg-light-green ">
                                        <img src={Can1} alt='' />
                                    </div> <span className="text-light-black cat-name">ST</span>
                                </Link>
                            </div>
                            <div className="swiper-slide">
                                <Link to="#" className="categories">
                                    <div className="icon text-custom-white bg-light-green ">
                                        <img src={Can2} alt='' />
                                    </div> <span className="text-light-black cat-name">QR</span>
                                </Link>
                            </div>
                            <div className="swiper-slide">
                                <Link to="#" className="categories">
                                    <div className="icon text-custom-white bg-light-green ">
                                        <img src={Can3} alt='' />
                                    </div> <span className="text-light-black cat-name">OP</span>
                                </Link>
                            </div>
                            <div className="swiper-slide">
                                <Link to="#" className="categories">
                                    <div className="icon text-custom-white bg-light-green ">
                                        <img src={Can1} alt='' />
                                    </div> <span className="text-light-black cat-name">MN</span>
                                </Link>
                            </div>
                            <div className="swiper-slide">
                                <Link to="#" className="categories">
                                    <div className="icon text-custom-white bg-light-green ">
                                        <img src={Can2} alt='' />
                                    </div> <span className="text-light-black cat-name">KL</span>
                                </Link>
                            </div>
                            <div className="swiper-slide">
                                <Link to="#" className="categories">
                                    <div className="icon text-custom-white bg-light-green ">
                                        <img src={Can3} alt='' />
                                    </div> <span className="text-light-black cat-name">IJ</span>
                                </Link>
                            </div>
                            <div className="swiper-slide">
                                <Link to="#" className="categories">
                                    <div className="icon text-custom-white bg-light-green ">
                                        <img src={Can1} alt='' />
                                    </div> <span className="text-light-black cat-name">GH</span>
                                </Link>
                            </div>
                            <div className="swiper-slide">
                                <Link to="#" className="categories">
                                    <div className="icon text-custom-white bg-light-green ">
                                        <img src={Can2} alt='' />
                                    </div> <span className="text-light-black cat-name">EF</span>
                                </Link>
                            </div>
                            <div className="swiper-slide">
                                <Link to="#" className="categories">
                                    <div className="icon text-custom-white bg-light-green ">
                                        <img src={Can3} alt='' />
                                    </div> <span className="text-light-black cat-name">CD</span>
                                </Link>
                            </div>
                            <div className="swiper-slide">
                                <Link to="#" className="categories">
                                    <div className="icon text-custom-white bg-light-green ">
                                        <img src={Can1} alt='' />
                                    </div> <span className="text-light-black cat-name">AB</span>
                                </Link>
                            </div>
                        </div>
                        <div className="swiper-button-next"></div>
                        <div className="swiper-button-prev"></div>
                    </div>

                </div>
            </div>
        </div>
    </section>
  </>
  
     
);

    };


export default CandidateList;