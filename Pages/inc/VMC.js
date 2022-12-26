import React from 'react';


function vmc(){
    return(
            <section className="section bg-c-light border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-4 text-center">
                            <h3 className="main-heading">Vision Mission & Values</h3>
                            <div className="underline mx-auto"></div>
                            </div>

                            <div className="col-md-4 text-center">
                                <h6>Declarative</h6>
                                <p>
                                React makes it painless to create interactive UIs.
                                Design simple views for each state in your application, and React will efficiently
                                update and render just the right components when your data changes.
                                Declarative views make your code more predictable and easier to debug.
                                
                                </p>
                            </div>   


                            <div className="col-md-4 text-center">
                                <h6>Component Based</h6>
                                <p>
                                Build encapsulated components that manage their own state, 
                                then compose them to make complex UIs.

                                Since component logic is written in JavaScript instead of templates, you can easily 
                                pass rich data through your app and keep state out of the DOM.
                                </p>
                            </div>     


                            <div className="col-md-4 text-center">
                                <h6>Learn Once and Write Anywhere</h6>
                                <p>
                                We don’t make assumptions about the rest of your technology stack,
                                so you can develop new features in React without rewriting existing code.
                                React can also render on the server using Node and power mobile apps using React Native.
                                </p>
                            </div>                            

                        
                    </div>
                </div>
            </section>
    );
}

export default vmc;