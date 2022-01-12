import React from "react";

import AddItems from "../components/AddItems";
import NavBar from "../components/NavBar";
const  ShoppingListPage = () => {
 
return( 
<div className ="grid-container">
     <div className="Header">
          <NavBar />
     </div>
     <div className="Main">
         <AddItems/>
     </div>
</div>
);
}

export default ShoppingListPage;