import React from 'react';
//import VMC from './inc/VMC';

function About(){
    return(
        <div>
            <section className="py-4 bg-info">
                <div className="container">
                    <div className="row">
                        <div clasName="col-md-4 my-auto">
                        <h3><b>The Complete Information on Reacts JS</b></h3>
                    </div>
                
                    <div className="col-md-8 my-auto">
                        {/*<h3 className="float-end"></h3>*/}
                    </div>
                </div>
            </div>

            </section>

        <section className="section bg-c-light border-bottom">
            
        <div className="container">
                <h5 className="main-heading"><b>React Js(Introduction and Working)</b></h5>
            <div className="underline"></div>
            <p>
            Introduction to ReactJS: Let us understand this with a practical example.
            Let’s say one of your friends posted a photograph on Facebook. Now you go and like the image and then you 
            started checking out the comments too. Now while you are browsing over comments you see that the likes count 
            has increased by 100, since you liked the picture, even without reloading the page. This magical count change 
            is because of ReactJS. 
            React is a declarative, efficient, and flexible JavaScript library for building user interfaces. ‘V’ denotes 
            the view in MVC. ReactJS is an open-source, component-based front end library responsible only for the view 
            layer of the application. It is maintained by Facebook.
            </p>
            </div>
            
            
            
            
            
            
            <div className="container">
                <h5 className="main-heading"><b>What does React js do?</b></h5>
            <div className="underline"></div>
            <p>
            Typically, you request a webpage by typing its URL into your web browser. Your browser then sends a 
            request for that webpage, which your browser renders. If you click a link on that webpage to go to another
            page on the website, a new request is sent to the server to get that new page.

            This back-and-forth loading pattern between your browser (the client) and the server continues 
            for every new page or resource you try to access on a website. This typical approach to loading websites 
            works just fine, but consider a very data-driven website. The back and forth loading of the full webpage 
            would be redundant and create a poor user experience.
            </p>
            </div>


            <div className="container">
                <h5 className="main-heading"><b>How to use React.js do?</b></h5>
            <div className="underline"></div>
            <p>
            In contrast to other frameworks like Angular, React doesn’t enforce strict rules for code conventions or 
            file organization. This means developers and teams are free to set conventions that suit them best and 
            implement React however they see fit. With React, you can use as much or as little as you need due to its 
            flexibility.<br/>

            Using React, you can create a single button, a few pieces of an interface, or your entire app’s user 
            interface. You can gradually adopt and integrate it into an already existing application with a sprinkle of 
            interactivity or, better yet, use it to build full-fledged powerful React applications from the ground up, 
            depending on your need.<br/>

            <h6><b>Step 1: Add a DOM Container to the HTML.</b></h6>
            First, open the HTML page you want to edit. Add an empty div tag to mark the spot where you want to display something with React. <br/>
            We gave this div tag a unique id HTML attribute. This will allow us to find it from the JavaScript code later and display a React component inside of it.
            <br/>


            <h6><b>Step 2: Add the Script Tags</b></h6>
            Next, add three script tags to the HTML page right before the closing body tag.The first two tags load React. The third one will load your component code.
            <br/>

            <h6><b>Step 3: Create a React Component</b></h6>
            Create a file called like_button.js next to your HTML page.
            Open this starter code and paste it into the file you created.
            These three lines of code find the div tag we added to our HTML in the first step, create a React app with it, and then display our “Like” button React component inside of it.
            <br/>

            <h6><b>That’s It!</b></h6>
            There is no step four. You have just added the first React component to your website.
            <br/>
            </p>
            </div>

            <div className="container">
                <h5 className="main-heading"><b>How to use React.js do?</b></h5>
            <div className="underline"></div>
            <p>

            <h5><b>Top uses of React Js</b></h5>
            <h6>Creation of Dynamic web applications is easier</h6>
            Earlier creating a dynamic web page required a lot of complex coding. It needed specific HTML strings for 
            dynamic web pages. Using ReactJS is no more an issue. It makes use of JSX which has a particular syntax and 
            lets HTML quotes and tags to render particular subcomponents. In addition to this, it also supports building
            machine-readable code and mixes components into an individual variable file. In React regular JavaScript is
            not used for creating its templates.<br/>

            <h6><b>It increases productivity and also helps in maintenance</b></h6>
            Reusing components is the major advantage of React JS. Even Facebook has implemented React as it facilitates
            the reuse of system components. A developer can start with usual components like checkbox, button, etc. 
            Once this is done you can move to wrapper components comprised of internal logic which makes it easier to 
            manipulate and define objects used. This ensures consistency of application and facilitates code maintenance.
             Many companies like Walmart tend to use ReactJS. As all companies have common components like payment form 
             elements, image carousel, bread crumbs, for example. Here comes into picture the reuse of components. 
             Also to enable version management and further install components there are coding standards defined to 
             maintain uniformity. This also enhances the speed of the application, which enjoys more customer retention.<br/>

            <h6><b>Ensures faster rendering of Virtual DOM</b></h6>
            The performance of any application depends upon the structure on which it is built. For building a high load
            application this is one of the major factors which is to be considered. But engines that are used these days 
            cannot ensure bottlenecks because DOM (document object model) is tree-structured and even small layers 
            can make drastic changes. To resolve this Virtual DOM was introduced. ReactJS can be used for heavy loaded
            and dynamic solutions. It is a virtual representation on the document object model and checks if all 
            changes are applied to the virtual DOM. The real DOM tree is later updated and it also ensures that minimum
            time is consumed for this purpose. Using this method guarantees better user experience and performance.<br/>

            <h6><b>It ensures to have a stable code</b></h6>
            ReactJS uses downward data flow. This is because it ensures that smallest of changes that happen in child 
            structure do not affect the parents. When an object is changed by a developer it needs to be made sure that 
            only the particular objects are updated and that just its state is modified. The data is bound together with
             the object and this structure sees to it that code stability and application performance is maintained.
            <br/>

            </p>
            </div>
        </section>

        {/*------<VMC/>-----------*/}
        

        </div>
    );
}

export default About;