import React from 'react';
import NavBar from "../components/NavBar";
import { Link } from 'react-router-dom';
const HomePage = () => (
 
  <div >
      <div className="Warpper">
    
         <NavBar/>
     <div className="homePageContainer">
    
       <div className="homePageParagraph">

            <div className="title">
            <span className="block"></span>
            <h1>EIKA Shopping List<span></span></h1>
            </div>

             <div className="text">
             <div className="block"></div>
             <p>A Smart way for Organizing your shopping List</p>
             <Link  to="/shoppinglist"><button className="tryitButton" >Try it </button></Link>
            </div>

        </div>

     </div>
</div>
      
</div>
   
      

     
);

export default HomePage;