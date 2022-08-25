import React from 'react';
import  '../css/bootstrap.min.css';
import  '../css/style.css';
import Subscribe from '../components/Subscribe';
import { Link } from "react-router-dom";



const About = () => {

    return (

        <>
     
        

        
    <div className="main-sec"></div>

    <div className="breadcrumb-area">
        <div className="overlay overlay-bg"></div>
        <div className="container">
            <div className="breadcrumb-content">
                <h2>About Us</h2>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li className="active">About us</li>
                </ul>
            </div>
        </div>
    </div>
 
<section className="our-articles bg-light-theme section-padding ">

<div class="main-box padding-50 full-width mb-md-40">
<div class="post-wrapper mb-xl-20">


<div className="row">
                            <div className="col-12">
                                <div className="blog-meta mb-xl-20">
                                    <h5 className="blog-title text-light-black">Best Democratic Party in Brooklyn.</h5>
                                   

                                    <p className="text-light-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                </div>
                                <div className="blog-meta mb-xl-20">
                                    <h6 className="blog-title text-light-black">Why do we choose it?</h6>
                                    <p className="text-light-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                                </div>
                                <div className="blog-meta mb-xl-20">
                                    <h6 className="blog-title text-light-black">Where does it come from?</h6>
                                    <p className="text-light-white mb-xl-20">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                                    <p className="text-light-white">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                                </div>
                                <div className="blog-meta mb-xl-20">
                                    <h6 className="blog-title text-light-black">Where can I get that product?</h6>
                                    <p className="text-light-white">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                                </div>
                                <div className="blog-meta mb-xl-20">
                                    <h6 className="blog-title text-light-black">Why do we order from there?</h6>
                                    <p className="text-light-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                                </div>
                            </div>

</div>
</div>
</div>
</section>
    
<Subscribe/>

       
        </>

     );

    };




export default About;