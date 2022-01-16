import React from "react";
import AddItem from "../components/AddItem";

import NavBar from "../components/NavBar";
const  ShoppingListPage = () => {
   
return( 
<div className ="grid-container">
     <div className="Header">
          <NavBar />
     </div>
     <div className="Main">
          <AddItem  />
        
     </div>
</div>
);
}

export default ShoppingListPage;