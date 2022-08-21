import React from 'react';
import { Link } from "react-router-dom";
import ParticipateSection from '../components/ParticipateSection';
import Subscribe from '../components/Subscribe';


const Participate = () => {

    return (

        <>
         <div className="main-sec"></div>

    <div className="breadcrumb-area">
        <div className="overlay overlay-bg"></div>
        <div className="container">
            <div className="breadcrumb-content">
                <h2>Participate</h2>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li className="active">Participate</li>
                </ul>
            </div>
        </div>
    </div>
        

        <ParticipateSection />
        <Subscribe/>
        
       
        </>

     );

    };




export default Participate;