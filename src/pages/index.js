import React  from 'react';
import TopHeader from '../components/TopHeader';
import Header from '../components/Header';
import Slider from '../components/Slider';
import Participate from '../components/Participate';
import Countdown from '../components/Countdown';
import Subscribe from '../components/Subscribe';
import Footer from '../components/Footer';
import Copyright from '../components/Copyright';


const Home = () => {
    return (

        <>
        <TopHeader />
        <Header />
        <Slider />
        <Participate />
        <Countdown />
        <Subscribe />
        <Footer />
        <Copyright />
        </>

     );

    };

export default Home;