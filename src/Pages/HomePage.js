import React from 'react';
import homePageImage from "../Assets/Images/Lady.png";
import NavBar from "../components/NavBar";
import { Link } from 'react-router-dom';
import AddItems from '../components/AddItems';

const HomePage = () => (
    
  <div className ="grid-container " >
     <div className="Header">
       <NavBar/>
     </div>
     <div className="Main">
        <img className="homePageImage" src={homePageImage} alt="homepagePicture"  />  *
       <p>
           hi this is my project 
       </p>

       <Link to="/shoppinglist"><button>Click me</button></Link>
     </div>
      
  </div>
     
);

export default HomePage;