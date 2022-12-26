import React from 'react';

function ContactUs(){
    return(
        
        <div>

                <section className="py-3 bg-info">
                <div className="container">
                    <div className="row">
                        <div clasName="col-md-4 my-auto">
                        <h3>Contact Us</h3>
                    </div>
                
                    <div className="col-md-8 my-auto">
                        {   /*<h6 className="float-end"></h6> */}
                    </div>
                </div>
                </div>
            
            </section>


        <section className="section">
        <div className="container">
            <div className="card shadow">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6 border-right">
                            <h6>Contact Form</h6>
                            <hr/>

                            <div className="form-group">
                                <label  className="mb-1">Full Name</label>
                                <input type="text" className="form-control" placeholder="Enter Full Name"/>
                            </div>

                            <div className="form-group">
                                <label  className="mb-1">Phone Number</label>
                                <input type="text" className="form-control" placeholder="Enter Phone Number"/>
                            </div>

                            <div className="form-group">
                                <label for="" className="mb-1">Email Address</label>
                                <input type="text" className="form-control" placeholder="Enter Email Address"/>
                            </div>

                            <div className="form-group">
                                <label for="" className="mb-1">Message</label>
                        
                                <textarea row="3" className="form-control" placeholder="Type Message..."/>
                            </div>


                            <div className="form-group py-3">
                                
                                <button type="text" className="btn btn-primary shadow w-100">Send Message</button>
                            </div>

                        </div>
                    

                    <div className="col-md-6 border-start">

                    <h5 className="main-heading">Address Information</h5>
                        <div className=""></div>
                        <p>
                            #XXX ,Suraj, Banglore Karnataka-43932,India
                        </p>
                        <p>
                            Phone No- +91 3294832432
                        </p>
                        <p>
                            Email:reactdomain@gmail.com
                        </p>
                        
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </section>

        </div>
    );
}

export default ContactUs;