import React from 'react';
import homePageImage from "../Assets/Images/Lady.png";
import NavBar from "../components/NavBar";

const HomePage = () => (
    
  <div className ="grid-container">
     <div className="item1">
       <NavBar/>
     </div>
     <div className="item2">
       <img className="homePageImage" src={homePageImage} alt="homepagePicture" /> 
     </div>
      
  </div>
     
);

export default HomePage;