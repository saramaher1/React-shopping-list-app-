import React from 'react';
import twoLady from "../Assets/Images/twoLady.png";
import ladyPointing from "../Assets/Images/ladyPointing1.png";
import NavBar from "../components/NavBar";
import { Link } from 'react-router-dom';
import UploadPicture from "../components/UploadPicture";
const HomePage = () => (
 
  <div  >
     <div >
         <NavBar/>
     </div>
     <div className="listContainer">
        <div className="homePageParagraph"> 
          <p>My Shopping List App </p>
           <p> Smart Way of Organizing your Shopping Items with "My Shopping List App" ,
           Try it now !! 
           </p>
         </div>
      

        <div >
         <Link className="clickMe" to="/shoppinglist"><button>Click me</button></Link>
        </div>
        <div><img  className="homePageImage" src={ladyPointing} alt="homepagePicture"  /> 
        </div>

      </div>
      
  </div>
     
);

export default HomePage;