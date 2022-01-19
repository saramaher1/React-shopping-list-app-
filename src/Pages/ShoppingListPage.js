import React from "react";
import AddItem from "../components/AddItem";
import twoLady from"../Assets/Images/twoLady.png";
import NavBar from "../components/NavBar";
const  ShoppingListPage = () => {
   
return( 
<div >
     <div>
          <NavBar />
     </div>
     <div > 
          <AddItem  />
        
     </div>
</div>
);
}

export default ShoppingListPage;