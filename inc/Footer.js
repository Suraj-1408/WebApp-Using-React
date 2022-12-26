import React from 'react';
import {Link} from 'react-router-dom';
function Footer(){

    return(
        <section className="section footer bg-dark text-white">
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <h6>WebPage Information</h6>
                    <hr/>

                    <p className="text-white mb-1">
                    React is a framework for building applications using JavaScript. 
                    React Native is an entire platform allowing you to build native, cross-platform mobile apps, 
                    and React.js is a JavaScript library you use for constructing a high performing UI layer.

                    To put it in simpler terms, React is ideal for building dynamic, high performing, responsive UI for 
                    your web interfaces, while React Native is meant to give your mobile apps a truly native feel.
                    </p>
                </div>

            <div className="col-md-4">
                <h6>Quick Link</h6>
                <hr/>
                <div><Link to="/">Home</Link></div>
                <div><Link to="/about">About</Link></div>
                <div><Link to="/">Contact</Link></div>
                <div><Link to="/">Blog</Link></div>
            </div>


        <div className="col-md-4">
        <h6>Contact Information</h6>
        <hr/>
                    <div><p className="text-white mb-1">#64,Banglore/Karnataka India</p></div>
                    <div><p className="text-white mb-1">+91 8363828XXX</p></div>
                    <div><p className="text-white mb-1">+91 8363828XXX</p></div>
                    <div><p className="text-white mb-1">reactdomain@gmail.com</p></div>

        </div>
        </div>
        </div>

        </section>
    );

}

export default Footer;