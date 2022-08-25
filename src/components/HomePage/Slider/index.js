import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import  '../../../css/bootstrap.min.css';
import  '../../../css/style.css';
import  '../../../css/swiper.min.css';
import { Link } from "react-router-dom";
import Banner1 from '../../../img/banner/banner1.jpg';
import Banner2 from '../../../img/banner/banner2.jpg';
import Banner3 from '../../../img/banner/banner3.jpg';

function Slider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };



  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
 
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Banner1}
          alt="The Northern Coalition For Peter Obi"
        />
        <Carousel.Caption>
           <h1 className="text-white fw-600 fs-60">Northern Coalition For Peter Obi</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <Link to="/about" className="btn-solid with-line btn-big mt-20"><span>Read More<i className="fas fa-caret-right"></i></span></Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Banner2}
          alt="Our Candidates"
        />

        <Carousel.Caption>
           <h1 className="text-white fw-600 fs-60">Candidates</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Link to="/candidates" className="btn-solid with-line btn-big mt-20"><span>Read More<i className="fas fa-caret-right"></i></span></Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Banner3}
          alt="Donate"
        />

        <Carousel.Caption>
          <h1 className="text-white fw-600 fs-60">Donate</h1>
          <p>
           Support our efforts, donate to the campaign
          </p>
          <Link to="/donate" className="btn-solid with-line btn-big mt-20"><span>Read More<i className="fas fa-caret-right"></i></span></Link>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}

export default Slider;