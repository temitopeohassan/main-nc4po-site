import React from 'react';
import { Link } from "react-router-dom";
import Subscribe from '../components/Subscribe';





const Donate = () => {

    return (

        <>
       <div className="main-sec"></div>

    <div className="breadcrumb-area">
        <div className="overlay overlay-bg"></div>
        <div className="container">
            <div className="breadcrumb-content">
                <h2>Donate</h2>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li className="active">Donate</li>
                </ul>
            </div>
        </div>
    </div>
        

        <Subscribe/>
       
        </>

     );

    };




export default Donate;