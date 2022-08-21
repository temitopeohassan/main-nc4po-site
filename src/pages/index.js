import React  from 'react'
import Slider from '../components/Slider';
import ParticipateSection from '../components/ParticipateSection';
import AboutSection from '../components/AboutSection';
import CandidatesList from '../components/CandidatesList';
import Countdown from '../components/Countdown';
import Subscribe from '../components/Subscribe';


const Home = () => {

    return (

        <>
        <Slider />
        <ParticipateSection />
         <CandidatesList />
         <AboutSection />
        <Countdown />
        <Subscribe />
        </>
    

     );

    };

export default Home;