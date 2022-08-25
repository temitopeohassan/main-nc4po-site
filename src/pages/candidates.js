import React from 'react';
import Subscribe from '../components/Subscribe';
import { Link } from "react-router-dom";





const Candidates = () => {

    return (

        <>
     
          <div className="main-sec"></div>

    <div className="breadcrumb-area">
        <div className="overlay overlay-bg"></div>
        <div className="container">
            <div className="breadcrumb-content">
                <h2>Candidates</h2>
                <ul>
                    <li><Link to="/">Home</Link>
                    </li>
                    <li className="active">Candidates</li>
                </ul>
            </div>
        </div>
    </div>
 

        <Subscribe/>
       
        </>

     );

    };




export default Candidates;