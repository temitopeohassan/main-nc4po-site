import React from 'react';
import Subscribe from '../components/Subscribe';
import { Link } from "react-router-dom";
import  Img from '../img/abt1.jpg';





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

     <div className="main-sec"></div>
 
<div className="container">
        <div className="row">
            <div className="col-md-6 mt-20">
                <h2>Candidates</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat voluptate molestias, quaerat quo natus dolor harum voluptatibus modi dicta ducimus.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum quae officia earum dolore est quaerat cupiditate voluptatibus id, magni alias veniam voluptate, libero explicabo, distinctio atque!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, fugit itaque ratione incidunt voluptas. Quaerat quidem dolor, quisquam amet inventore quas adipisci ea sint qui placeat beatae molestias aut, aperiam!</p>
                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat voluptate molestias, quaerat quo natus dolor harum voluptatibus modi dicta ducimus.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum quae officia earum dolore est quaerat cupiditate voluptatibus id, magni alias veniam voluptate, libero explicabo, distinctio atque!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, fugit itaque ratione incidunt voluptas. Quaerat quidem dolor, quisquam amet inventore quas adipisci ea sint qui placeat beatae molestias aut, aperiam!</p>
                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat voluptate molestias, quaerat quo natus dolor harum voluptatibus modi dicta ducimus.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum quae officia earum dolore est quaerat cupiditate voluptatibus id, magni alias veniam voluptate, libero explicabo, distinctio atque!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, fugit itaque ratione incidunt voluptas. Quaerat quidem dolor, quisquam amet inventore quas adipisci ea sint qui placeat beatae molestias aut, aperiam!</p>
                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat voluptate molestias, quaerat quo natus dolor harum voluptatibus modi dicta ducimus.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum quae officia earum dolore est quaerat cupiditate voluptatibus id, magni alias veniam voluptate, libero explicabo, distinctio atque!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, fugit itaque ratione incidunt voluptas. Quaerat quidem dolor, quisquam amet inventore quas adipisci ea sint qui placeat beatae molestias aut, aperiam!</p>
                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat voluptate molestias, quaerat quo natus dolor harum voluptatibus modi dicta ducimus.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum quae officia earum dolore est quaerat cupiditate voluptatibus id, magni alias veniam voluptate, libero explicabo, distinctio atque!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, fugit itaque ratione incidunt voluptas. Quaerat quidem dolor, quisquam amet inventore quas adipisci ea sint qui placeat beatae molestias aut, aperiam!</p>
            </div>
            <div className="col-md-6">
                <img src={Img} alt="" />
            </div>
        </div>
    </div>

        <Subscribe/>
       
        </>

     );

    };




export default Candidates;