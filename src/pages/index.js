import React  from 'react'
import Slider from '../components/HomePage/Slider';
import ParticipateSection from '../components/HomePage/ParticipateSection';
import AboutSection from '../components/HomePage/AboutSection';
import Countdown from '../components/HomePage/Countdown';
import Subscribe from '../components/Subscribe';


const Home = () => {

    return (

        <>
        <Slider />
        <ParticipateSection />
  <div className="main-sec"></div>
        <h1>About Us</h1>
         <AboutSection />
           <div className="main-sec"></div>
        <Countdown />
          <div className="main-sec"></div>
        <Subscribe />
        </>
    

     );

    };

export default Home;