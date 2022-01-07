import React from 'react';
import homePageImage from "../Assets/Images/Lady.png";
import NavBar from "../components/NavBar";

const HomePage = () => (
    
  <div className ="grid-container">
     <div className="Header">
       <NavBar/>
     </div>
     <div className="Main">
       <img className="homePageImage" src={homePageImage} alt="homepagePicture"  /> 
       <p>
           hi this is my project 
       </p>
     </div>
      
  </div>
     
);

export default HomePage;