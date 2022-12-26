import React from 'react';
import './App.css';
//import reportWebVitals from './reportWebVitals';
import Navbar from './Components/inc/Navbar';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Footer from './Components/inc/Footer';

function App() {
  return ( 
    
    <Router>
      
        <div>   
          <Navbar/>

          
          <Routes>
           
            <Route exact path="/" element={<Home/>}/>
            
            <Route path="/about" element={<About/>}/>
            
            <Route path="/Contact" element={<Contact/>}/>
            
            </Routes>
          
            <Footer/>
  
          </div>
      
      </Router>
  );
}

export default App;
