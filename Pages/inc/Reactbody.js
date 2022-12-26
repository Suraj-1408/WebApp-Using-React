import React from 'react';

function body(){
    return(
        <div>
            <p>
             In React, you develop your applications by creating reusable components that you can think of as
             independent Lego blocks. These components are individual pieces of a final interface, which, when 
             assembled, form the application’s entire user interface.

             <h3>What does React.js do?</h3> 
            Typically, you request a webpage by typing its URL into your web browser. Your browser then sends a 
            request for that webpage, which your browser renders. If you click a link on that webpage to go to another
            page on the website, a new request is sent to the server to get that new page.

            This back-and-forth loading pattern between your browser (the client) and the server continues 
            for every new page or resource you try to access on a website. This typical approach to loading websites 
            works just fine, but consider a very data-driven website. The back and forth loading of the full webpage 
            would be redundant and create a poor user experience.


            <h3>How to use React.js do?</h3> 
            In contrast to other frameworks like Angular, React doesn’t enforce strict rules for code conventions or 
            file organization. This means developers and teams are free to set conventions that suit them best and 
            implement React however they see fit. With React, you can use as much or as little as you need due to its 
            flexibility.

            Using React, you can create a single button, a few pieces of an interface, or your entire app’s user 
            interface. You can gradually adopt and integrate it into an already existing application with a sprinkle of 
            interactivity or, better yet, use it to build full-fledged powerful React applications from the ground up, 
            depending on your need.
            </p>
        </div>

    );
}

export default body;