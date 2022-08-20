import React from 'react';
import style from '../../css/style.css';
import bootstrap from '../../css/bootstrap.min.css';
import {swiperContainer} from '../../css/swiper.min.css';
import Can1 from '../../img/categories/category1.png';
import Can2 from '../../img/categories/category2.png';
import Can3 from '../../img/categories/category3.png';







const CandidateList = () => {

    return (

    <section className="browseCat"> 
    <div className="bgThemePrimary">
    <div className="sectionPadding">
        <div className="containerFluid">
        <div className="customContainer">
            <div className="row">
                <div className="col-12">
                    <div className="sectionHeaderLeft title">
                        <h3 className="textLightBlack headerTitle">Our Candidates List </h3>
                        <span className="fs16 align-self-center"><a href="#">See All</a></span>
                    </div>
                </div>
                <div className="col-12">
                    <div class="categorySlider swiperContainer">
                        <div class="swiperWrapper">
                            <div class="swiperSlide">
                                <a href="#" className="categories">
                                    <div className="icon text-custom-white bg-light-green ">
                                     <img src={Can1} alt='' />
                                    </div> <span className="text-light-black cat-name">YZ</span>
                                </a>
                            </div>
                            <div className="">
                                <a href="#" className="categories">
                                    <div className="icon text-custom-white bg-light-green ">
                                         <img src={Can2} alt='' />
                                    </div> <span className="text-light-black cat-name">WX</span>
                                </a>
                            </div>
                            <div className="">
                                <a href="#" className="categories">
                                    <div className="icon text-custom-white bg-light-green ">
                                     <img src={Can3} alt='' />
                                    </div> <span className="text-light-black cat-name">UV</span>
                                </a>
                            </div>
                            <div className="">
                                <a href="#" className="categories">
                                    <div className="icon text-custom-white bg-light-green ">
                                     <img src={Can1} alt='' />
                                    </div> <span className="text-light-black cat-name">ST</span>
                                </a>
                            </div>
                            <div className="">
                                <a href="#" className="categories">
                                    <div className="icon text-custom-white bg-light-green ">
                                     <img src={Can2} alt='' />
                                    </div> <span className="text-light-black cat-name">QR</span>
                                </a>
                            </div>
                            <div className="">
                                <a href="#" className="categories">
                                    <div className="icon text-custom-white bg-light-green ">
                                     <img src={Can3} alt='' />
                                    </div> <span className="text-light-black cat-name">OP</span>
                                </a>
                            </div>
                            <div className="">
                                <a href="#" className="categories">
                                    <div className="icon text-custom-white bg-light-green ">
                                     <img src={Can1} alt='' />
                                    </div> <span className="text-light-black cat-name">MN</span>
                                </a>
                            </div>
                            <div className="">
                                <a href="#" className="categories">
                                    <div className="icon text-custom-white bg-light-green ">
                                     <img src={Can2} alt='' />
                                    </div> <span className="text-light-black cat-name">KL</span>
                                </a>
                            </div>
                            <div className="">
                                <a href="#" className="categories">
                                    <div className="icon text-custom-white bg-light-green ">
                                     <img src={Can3} alt='' />
                                    </div> <span className="text-light-black cat-name">IJ</span>
                                </a>
                            </div>
                            <div className="">
                                <a href="#" className="categories">
                                    <div className="icon text-custom-white bg-light-green ">
                                     <img src={Can1} alt='' />
                                    </div> <span className="text-light-black cat-name">GH</span>
                                </a>
                            </div>
                            <div className="">
                                <a href="#" className="categories">
                                    <div className="icon text-custom-white bg-light-green ">
                                     <img src={Can2} alt='' />
                                    </div> <span className="text-light-black cat-name">EF</span>
                                </a>
                            </div>
                            <div className="">
                                <a href="#" className="categories">
                                    <div className="icon text-custom-white bg-light-green ">
                                     <img src={Can3} alt='' />
                                    </div> <span className="text-light-black cat-name">CD</span>
                                </a>
                            </div>
                            <div className="">
                                <a href="#" className="categories">
                                    <div className="icon text-custom-white bg-light-green ">
                                     <img src={Can1} alt='' />
                                    </div> <span className="text-light-black cat-name">AB</span>
                                </a>
                            </div>
                        </div>

                        <div className="swiper-button-next"></div>
                        <div className="swiper-button-prev"></div>
                    </div>

                </div>
            </div>
        </div>
        </div>
        </div>
        </div>
    </section>
  
     
);

    };


export default CandidateList;