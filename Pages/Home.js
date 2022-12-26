import React from 'react';
import Slider from '../inc/Slider';
import {Link} from 'react-router-dom';
import Vmc from './inc/VMC';
import service1 from '../Images/Img1.jpeg';
import service2 from '../Images/Img2.jpg';
import service3 from '../Images/Img4.jpg';
//import body from '../Pages/inc/Reactbody';

function Home(){
    return(
        <div>
            <Slider/>

            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="main-heading">What is React Js</h3>
                            <div className="underline mx-auto"></div>
                            <p>
                            The React.js framework is an open-source JavaScript framework and library developed by 
                            Facebook. It’s used for building interactive user interfaces and web applications quickly 
                            and efficiently with significantly less code than you would with vanilla JavaScript.   
                            </p>

                        <Link to='/about' className="btn btn-warning shadow">Read More</Link>
                        </div>
                    </div>
                </div>
            </section>



            {/*Our Vision , Mission & Value*/}
            <Vmc/>

            {/*Our Services*/}
            <section className="section  border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-4 text-center">
                            <h3 className="main-heading">Our Services</h3>
                            <div className="underline mx-auto"></div>
                            </div>

                        <div className="col-md-4">
                            <div className="card shadow">
                                    <img src={service1} className="w-100 border-bottom" alt="services"/>
                                <div className="card-body">
                                        <h6>Backend Applications</h6>
                                    <div className="underline"></div>  
                                            <p>Using React Database integration enables users to handle database operation
                                                in JS. Node js consists of libraries & intefaces that allow smooth integration and with
                                                database.Another good reason why you want to use React is that it offers stable code</p> 
                                    
                                            <Link to="/services" className="btn btn-link">Read More</Link>
                                </div>
                            </div>   
                        </div> 


                        <div className="col-md-4">
                            <div className="card shadow">
                                    <img src={service2} className="w-100 border-bottom" alt="services"/>
                                <div className="card-body">
                                        <h6>Mobile Developement</h6>
                                    <div className="underline"></div>  
                                            <p>Building interactive user interfaces and web applications quickly 
                                            and efficiently with significantly less code than you would with vanilla
                                            JS.The main purpose of React is to be fast, scalable, and simple. It works only on user interfaces 
                                            in the application.</p> 
                                    
                                            <Link to="/services" className="btn btn-link">Read More</Link>
                                </div>
                            </div>   
                        </div> 


                        <div className="col-md-4">
                            <div className="card shadow">
                                    <img src={service3} className="w-100 border-bottom" alt="services"/>
                                <div className="card-body">
                                        <h6>Web Developement</h6>
                                    <div className="underline"></div>  
                                            <p>React was created with a single focus: to create components for web applications.Today, front-end frameworks and libraries are essential part 
                                            of web development.React js is a front-end library framework for modern web development.
                                            </p> 
                                    
                                            <Link to="/services" className="btn btn-link">Read More</Link>
                                </div>
                            </div>   
                        </div>   


                            
                        
                    </div>
                </div>
            </section>
                

        </div>    
    );
}

export default Home;